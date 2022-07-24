package com.smwuis.sooksook.repository;

import com.smwuis.sooksook.domain.user.User;

import java.util.List;
import java.util.Optional;
import org.springframework.data.jpa.repository.JpaRepository;

public interface UserRepository extends JpaRepository<User,Long> {

    User save(User user); //회원 등록
    Optional<User> findById(Long id); //Id로 회원 조회
    Optional<User> findByName(String name);   //name으로 회원 조회

    Optional<User> findByEmail(String email);

    Optional<User> findByNickname(String nickname);

    Optional<User> findByPassword(String password);

    Optional<User> findByIntroduction(String introduction);

    Optional<User> findByPoints(Long introduction);

    Optional<User> findByRating(String rating);
    List<User> findAll(); //전체회원 조회

}