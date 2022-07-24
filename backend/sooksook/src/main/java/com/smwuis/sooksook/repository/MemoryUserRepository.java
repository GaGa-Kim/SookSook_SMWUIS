package com.smwuis.sooksook.repository;

import com.smwuis.sooksook.domain.user.User;

import java.util.*;

public class MemoryUserRepository {
//
//    private static Map<Long, User> store = new HashMap<>();
//    private static long sequence = 0L;
//
//    @Override
//    public User save(User user) {
//        user.setId(++sequence);
//        store.put(user.getId(), user);
//        return user;
//    }
//
//    @Override
//    public Optional<User> findById(Long id) {
//        return Optional.ofNullable(store.get(id));
//    }
//
//    @Override
//    public Optional<User> findByName(String name) {
//        return store.values().stream()
//                .filter(user -> user.getName().equals(name))
//                .findAny();
//    }
//
//    @Override
//    public Optional<User> findByEmail(String email) {
//        return store.values().stream()
//                .filter(user -> user.getEmail().equals(email))
//                .findAny();
//    }
//
//    @Override
//    public Optional<User> findByNickname(String nickname) {
//        return store.values().stream()
//                .filter(user -> user.getNickname().equals(nickname))
//                .findAny();
//    }
//
//    @Override
//    public Optional<User> findByPassword(String password) {
//        return store.values().stream()
//                .filter(user -> user.getPassword().equals(password))
//                .findAny();
//    }
//
//    @Override
//    public Optional<User> findByIntroduction(String introduction) {
//        return store.values().stream()
//                .filter(user -> user.getIntroduction().equals(introduction))
//                .findAny();
//    }
//
//    @Override
//    public Optional<User> findByPoints(Long points) {
//        return Optional.ofNullable(store.get(points));
//    }
//
//    @Override
//    public Optional<User> findByRating(String rating) {
//        return store.values().stream()
//                .filter(user -> user.getRating().equals(rating))
//                .findAny();
//    }
//
//    @Override
//    public List<User> findAll() {
//        return new ArrayList<>(store.values());
//    }
//
//    // (테스트용) repository를 삭제하는 메서드
//    public void clearStore(){
//        store.clear();
//    }
}
