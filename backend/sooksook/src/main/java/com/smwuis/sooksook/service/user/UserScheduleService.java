package com.smwuis.sooksook.service.user;

import com.smwuis.sooksook.domain.user.User;
import com.smwuis.sooksook.domain.user.UserRepository;
import com.smwuis.sooksook.domain.user.UserSchedule;
import com.smwuis.sooksook.domain.user.UserScheduleRepository;
import com.smwuis.sooksook.web.dto.user.UserScheduleRequestDto;
import com.smwuis.sooksook.web.dto.user.UserScheduleResponseDto;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;
import java.util.stream.Collectors;

@Service
@RequiredArgsConstructor
public class UserScheduleService {

    private final UserScheduleRepository userScheduleRepository;
    private final UserRepository userRepository;

    // 스케줄 등록
    @Transactional
    public Long save(UserScheduleRequestDto requestDto) {
        User user = userRepository.findByEmail(requestDto.getEmail()).orElseThrow(()-> new IllegalArgumentException("해당 유저가 없습니다."));
        UserSchedule userSchedule = requestDto.toEntity();
        userSchedule.setUser(user);
        user.addUserScheduleList(userScheduleRepository.save(userSchedule));

        return userScheduleRepository.save(userSchedule).getId();
    }

    // 스케줄 수정
    @Transactional
    public Long update(Long id, UserScheduleRequestDto requestDto) {
        UserSchedule userSchedule = userScheduleRepository.findById(id).orElseThrow(()-> new IllegalArgumentException("해당 유저 스케줄이 없습니다."));
        userSchedule.update(requestDto.getPeriod(),
                requestDto.getContent());

        return userSchedule.getId();
    }

    // 스케줄 삭제
    @Transactional
    public Long delete(Long id) {
        UserSchedule userSchedule = userScheduleRepository.findById(id).orElseThrow(()-> new IllegalArgumentException("해당 유저 스케줄이 없습니다."));
        userScheduleRepository.delete(userSchedule);
        return userSchedule.getId();
    }
    
    // 스케줄 완료 체크
    @Transactional
    public Long finish(Long id) {
        UserSchedule userSchedule = userScheduleRepository.findById(id).orElseThrow(()-> new IllegalArgumentException("해당 유저 스케줄이 없습니다."));
        userSchedule.updateFinish();
        return userSchedule.getId();
    }
    
    // 나의 스케줄 조회
    @Transactional
    public List<UserScheduleResponseDto> findMySchedule(String email) {
        User user = userRepository.findByEmail(email).orElseThrow(()-> new IllegalArgumentException("해당 유저가 없습니다."));

        return userScheduleRepository.findAllByUserId(user)
                .stream()
                .map(UserScheduleResponseDto::new)
                .collect(Collectors.toList());
    }

    // 스케줄 상세 조회
    @Transactional
    public UserScheduleResponseDto findSchedule(Long id) {
        UserSchedule userSchedule = userScheduleRepository.findById(id).orElseThrow(()-> new IllegalArgumentException("해당 유저 스케줄이 없습니다."));
        return new UserScheduleResponseDto(userSchedule);
    }
}
