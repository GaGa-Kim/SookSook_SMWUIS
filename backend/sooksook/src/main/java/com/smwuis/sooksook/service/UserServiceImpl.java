package com.smwuis.sooksook.service;

import com.smwuis.sooksook.domain.user.User;
import com.smwuis.sooksook.exception.DataNotFoundException;
import com.smwuis.sooksook.repository.UserRepository;
import com.smwuis.sooksook.web.dto.user.UserUpdateForm;
import java.util.Optional;
import java.util.zip.DataFormatException;
import lombok.RequiredArgsConstructor;
import org.springframework.dao.DataIntegrityViolationException;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

@Service
@RequiredArgsConstructor
public class UserServiceImpl implements UserService {
    private final UserRepository userRepository;

    private final BCryptPasswordEncoder bCryptPasswordEncoder;

    @Override
    @Transactional
    public User save(User user) {

        if (!emailDuplicateCheck(user.getEmail())) {
            String encodedPassword = bCryptPasswordEncoder.encode(user.getPassword());
            user.setPassword(encodedPassword);

            return userRepository.save(user);
        }
        throw new DataIntegrityViolationException("중복된 이메일 입니다.");
    }

    @Override
    @Transactional
    public void delete(Long id) {
        User user = userRepository.findById(id).orElseThrow(DataNotFoundException::new);
        userRepository.delete(user);
    }

    @Override
    @Transactional
    public User updateUserForm(Long id, UserUpdateForm form) {
        User user = userRepository.findById(id).orElseThrow(DataNotFoundException::new);
        user.update(form);
        return user;
    }

    @Override
    @Transactional
    public void updatePassword(Long id, String password) {
        User user = userRepository.findById(id).orElseThrow(DataNotFoundException::new);
        String encodedPassword = bCryptPasswordEncoder.encode(user.getPassword());
        user.setPassword(encodedPassword);
    }

    private boolean emailDuplicateCheck(String email) {
        return userRepository.findByEmail(email).isPresent();
    }
}
