package com.smwuis.sooksook.service.user;

import com.smwuis.sooksook.domain.study.StudyBoardRepository;
import com.smwuis.sooksook.domain.user.UserRating;
import com.smwuis.sooksook.domain.user.UserRatingRepository;
import com.smwuis.sooksook.domain.user.UserRepository;
import com.smwuis.sooksook.web.dto.user.UserRatingListResponseDto;
import com.smwuis.sooksook.web.dto.user.UserRatingResponseDto;
import com.smwuis.sooksook.web.dto.user.UserRatingSaveRequestDto;
import io.swagger.models.auth.In;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.ArrayList;
import java.util.List;
import java.util.stream.Collectors;

@Service
@RequiredArgsConstructor
public class UserRatingService {
    
    private final UserRatingRepository userRatingRepository;

    // 유저 평가 생성
    @Transactional
    public Long save(UserRatingSaveRequestDto saveRequestDto) {
        UserRating userRating = saveRequestDto.toEntity();

        return userRatingRepository.save(userRating).getId();
    }
    
    // 유저 평가 수정
    @Transactional
    public Long update(Long id, String contents, float score) {
        UserRating userRating = userRatingRepository.findById(id).orElseThrow(()-> new IllegalArgumentException("해당 유저 평가가 없습니다."));
        userRating.update(contents, score);

        return userRating.getId();
    }
    
    // 유저 평가 삭제
    @Transactional
    public Long delete(Long id) {
        UserRating userRating = userRatingRepository.findById(id).orElseThrow(()-> new IllegalArgumentException("해당 유저 평가가 없습니다."));
        userRatingRepository.delete(userRating);
        return userRating.getId();
    }
    
    // 나의 모든 유저 평가 조회
    @Transactional
    public List<UserRatingListResponseDto> findMyRating(String email) {
        return (userRatingRepository.findByReceiverEmail(email))
                .stream()
                .map(UserRatingListResponseDto::new)
                .collect(Collectors.toList());
    }

    // 유저 평가 상세 조회
    @Transactional
    public UserRatingListResponseDto findRating(Long id) {
        UserRating userRating = userRatingRepository.findById(id).orElseThrow(()-> new IllegalArgumentException("해당 유저 평가가 없습니다."));
        return new UserRatingListResponseDto(userRating);

    }

    // 유저 평가 스터디 종합 조회
    @Transactional
    public UserRatingResponseDto findRatingWithStudyBoard(String email, Long studyBoardId) {
        List<UserRating> userRatingList = userRatingRepository.findByReceiverEmailAndStudyBoardId(email, studyBoardId);
        List<String> contents = new ArrayList<>();

        float score = 0;

        for(UserRating userRating: userRatingList) {
            score = score + userRating.getScore();
            contents.add(userRating.getContents());
        }

        float averageScore = score / userRatingList.size();
        String formattedScore = String.format("%.1f", averageScore);

        return new UserRatingResponseDto(userRatingList.get(0), contents, formattedScore);
    }
}
