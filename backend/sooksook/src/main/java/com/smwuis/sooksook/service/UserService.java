package com.smwuis.sooksook.service;


import com.smwuis.sooksook.domain.user.User;
import com.smwuis.sooksook.repository.UserRepository;
import com.smwuis.sooksook.web.dto.user.UserUpdateForm;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

public interface UserService {

    User save(User user);

    void delete(Long id);

    User updateUserForm(Long id, UserUpdateForm form);

    void updatePassword(Long id, String password);
}
