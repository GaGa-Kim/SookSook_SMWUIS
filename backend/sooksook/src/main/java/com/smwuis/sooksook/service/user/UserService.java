package com.smwuis.sooksook.service.user;

import com.smwuis.sooksook.domain.user.User;
import com.smwuis.sooksook.domain.user.UserRepository;
import com.smwuis.sooksook.web.dto.user.UserResponseDto;
import com.smwuis.sooksook.web.dto.user.UserSaveRequestDto;
import com.smwuis.sooksook.web.dto.user.UserUpdateRequestDto;
import lombok.RequiredArgsConstructor;
import org.springframework.context.annotation.Bean;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

@Service
@RequiredArgsConstructor
public class UserService {

    private final UserRepository userRepository;
    private final PasswordEncoder passwordEncoder;

    // 유저 생성 (회원가입)
    @Transactional
    public Long signup(UserSaveRequestDto saveRequestDto) {

        if(userRepository.findByEmailOrLoginId(saveRequestDto.getEmail(), saveRequestDto.getLoginId()) == null) {
            User singUser = User.builder()
                    .name(saveRequestDto.getName())
                    .loginId(saveRequestDto.getLoginId())
                    .email(saveRequestDto.getEmail())
                    .nickname(saveRequestDto.getNickname())
                    .password(passwordEncoder.encode(saveRequestDto.getPassword()))
                    .introduction(saveRequestDto.getIntroduction())
                    .points(0)
                    .rating("새싹등급")
                    .build();

            return userRepository.save(singUser).getId();
        }

        else {
            throw new RuntimeException("이미 가입되어 있는 유저입니다.");
        }
    }
    
    // 유저 수정
    @Transactional
    public String update(Long id, String email, UserUpdateRequestDto updateRequestDto) {
        User user = userRepository.findById(id).orElseThrow(()-> new IllegalArgumentException("해당 유저가 없습니다."));

        if(user.getEmail().equals(email)) {
            user.update(updateRequestDto.getName(),
                    updateRequestDto.getNickname(),
                    passwordEncoder.encode(updateRequestDto.getPassword()),
                    updateRequestDto.getIntroduction());

            return "유저 수정 완료";
        }

        else {
            return "유저 수정 실패";
        }
    }
    
    // 유저 삭제
    @Transactional
    public String delete(Long id, String email) {
        User user = userRepository.findById(id).orElseThrow(()-> new IllegalArgumentException("해당 유저가 없습니다."));

        if(user.getEmail().equals(email)) {
            userRepository.delete(user);
            return "유저 삭제 완료";
        }

        else {
            return "유저 삭제 실패";
        }
    }

    // 로그인
    @Transactional
    public UserResponseDto login(String loginId, String password) {
        User user = userRepository.findByLoginId(loginId).orElseThrow(()-> new IllegalArgumentException("해당 유저가 없습니다."));

        if(user == null || !passwordEncoder.matches(password, user.getPassword())) {
            throw new RuntimeException("로그인에 실패했습니다.");
        }

        return new UserResponseDto(user);
    }


    // 유저 정보 조회
    @Transactional
    public UserResponseDto findUser(String email) {
        User user = userRepository.findByEmail(email).orElseThrow(()-> new IllegalArgumentException("해당 유저가 없습니다."));
        return new UserResponseDto(user);
    }

}
