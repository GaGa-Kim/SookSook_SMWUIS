package com.smwuis.sooksook.service;

import com.smwuis.sooksook.domain.study.PasswordComment;
import com.smwuis.sooksook.domain.study.PasswordCommentRepository;
import com.smwuis.sooksook.domain.study.StudyBoard;
import com.smwuis.sooksook.domain.study.StudyBoardRepository;
import com.smwuis.sooksook.domain.user.User;
import com.smwuis.sooksook.repository.UserRepository;
import com.smwuis.sooksook.web.dto.study.PasswordCommentResponseDto;
import com.smwuis.sooksook.web.dto.study.PasswordCommentSaveRequestDto;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.ArrayList;
import java.util.List;
import java.util.stream.Collectors;

@Service
@RequiredArgsConstructor
public class PasswordCommentService {

    private final PasswordCommentRepository passwordCommentRepository;
    private final StudyBoardRepository studyBoardRepository;
    private final UserRepository userRepository;

    // 댓글 작성
    @Transactional
    public Long save(PasswordCommentSaveRequestDto saveRequestDto) {
        PasswordComment passwordComment = saveRequestDto.toEntity();
        passwordComment.setStudyBoard(studyBoardRepository.findById(saveRequestDto.getStudyBoardId()).orElseThrow(()-> new IllegalArgumentException("해당 게시판이 없습니다.")));
        passwordComment.setUser(userRepository.findByEmail(saveRequestDto.getEmail()).orElseThrow(()-> new IllegalArgumentException("해당 유저가 없습니다.")));

        Long id = passwordCommentRepository.save(passwordComment).getId();

        if (saveRequestDto.getUpIndex() != null) {
            PasswordComment passwordCommentParent = passwordCommentRepository.findById(saveRequestDto.getUpIndex()).orElseThrow(() -> new IllegalArgumentException("해당 댓글이 없습니다."));
            passwordCommentParent.getChildList().add(id);
        }

        return id;
    }

    // 댓글 수정
    @Transactional
    public Long update(Long id, String content) {
        PasswordComment passwordComment = passwordCommentRepository.findById(id).orElseThrow(()-> new IllegalArgumentException("해당 댓글이 없습니다."));
        passwordComment.update(content);
        return id;
    }

    // 댓글 삭제
    @Transactional
    public void delete(Long id) {
        PasswordComment passwordComment = passwordCommentRepository.findById(id).orElseThrow(() -> new IllegalArgumentException("해당 댓글이 없습니다."));
        passwordComment.remove();

        List<PasswordComment> removableCommentList = findRemovableList(id);
        passwordCommentRepository.deleteAll(removableCommentList);
    }

    // 댓글 전체 조회
    @Transactional(readOnly = true)
    public List<PasswordCommentResponseDto> allList(Long studyPostId) {
        StudyBoard studyBoard = studyBoardRepository.findById(studyPostId).orElseThrow(()-> new IllegalArgumentException("해당 게시판이 없습니다."));

        return passwordCommentRepository.findAllByStudyBoardIdAndUpIndex(studyBoard, null)
                .stream()
                .map(PasswordCommentResponseDto::new)
                // .peek(passwordCommentResponseDto -> passwordCommentResponseDto.setContent("비밀댓글입니다."))
                .collect(Collectors.toList());
    }

    // 댓글 상세 조회
    @Transactional
    public PasswordCommentResponseDto view(Long id, String uid) {
        PasswordComment passwordComment = passwordCommentRepository.findById(id).orElseThrow(()-> new IllegalArgumentException("해당 댓글이 없습니다."));

        // '비밀댓글입니다.' 표시
        if(isSecretPassword(id, uid)) {
            PasswordCommentResponseDto passwordCommentResponseDto = new PasswordCommentResponseDto(passwordComment);
            passwordCommentResponseDto.setContent("비밀댓글입니다.");
            return passwordCommentResponseDto;
        }
        // 댓글 내용 표시
        else {
            return new PasswordCommentResponseDto(passwordComment);
        }
    }

    // 댓글과 대댓글 시 댓글 지울 목록
    public List<PasswordComment> findRemovableList(Long id) {
        PasswordComment passwordComment = passwordCommentRepository.findById(id).orElseThrow(()-> new IllegalArgumentException("해당 댓글이 없습니다."));

        List<PasswordComment> result = new ArrayList<>();

        // 대댓글
        if (passwordComment.getUpIndex() != null) {
            PasswordComment studyCommentParent = passwordCommentRepository.findById(passwordComment.getUpIndex()).orElseThrow(()-> new IllegalArgumentException("해당 댓글이 없습니다."));
            List<PasswordComment> childList = passwordCommentRepository.findAllByUpIndex(studyCommentParent.getId());

            if(studyCommentParent.isRemoved() && isAllChildRemoved(studyCommentParent.getId())) {
                result.addAll(childList);
                result.add(studyCommentParent);
            }
        }
        // 댓글
        else {
            if(isAllChildRemoved(passwordComment.getId())) {
                result.add(passwordComment);
            }
        }
        return result;
    }

    // 모든 자식 댓글이 삭제되었는지 판단
    public boolean isAllChildRemoved(Long id) {

        System.out.println("isAllChildRemoved");

        List<PasswordComment> childList = passwordCommentRepository.findAllByUpIndex(id);

        return childList.stream()
                .map(PasswordComment::isRemoved) // 지워졌는지 여부
                .filter(isRemove -> !isRemove) // 지워졌으면 true, 안 지워졌으면 false 이므로
                .findAny() // 지워지지 않은게 하나라도 있다면 false 반환
                .orElse(true); // 모두 지워졌다면 true 반환
    }

    // 비밀댓글 표시 여부
    private boolean isSecretPassword(Long id, String email) {
        PasswordComment passwordComment = passwordCommentRepository.findById(id).orElseThrow(()-> new IllegalArgumentException("해당 댓글이 없습니다."));
        User user = userRepository.findByEmail(email).orElseThrow(()-> new IllegalArgumentException("해당 유저가 없습니다."));

        if(passwordComment.getUpIndex() != null) {
            PasswordComment passwordCommentParent = passwordCommentRepository.findById(passwordComment.getUpIndex()).orElseThrow(()-> new IllegalArgumentException("해당 댓글이 없습니다."));
            
            // 댓글 작성자, 댓글의 부모 댓글 작성자, 글 작성자와 같으면 댓글 내용 표시
            if(passwordComment.getUserId().equals(user) || passwordComment.getUpIndex().equals(passwordCommentParent.getId()) || passwordComment.getStudyBoardId().getUserId().equals(user)) {
                return false;
            }
            // 그렇지 않을 경우 '비밀댓글입니다.' 표시
            else {
                return true;
            }
        }
        else {
            // 댓글 작성자, 글 작성자와 같으면 댓글 내용 표시
            if(passwordComment.getUserId().equals(user) || passwordComment.getStudyBoardId().getUserId().equals(user)) {
                return false;
            }
            // 그렇지 않을 경우 '비밀댓글입니다.' 표시
            else {
                return true;
            }
        }
    }
}
