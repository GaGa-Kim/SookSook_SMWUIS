package com.smwuis.sooksook.repository;

import com.smwuis.sooksook.domain.user.UserRating;
import org.springframework.data.jpa.repository.JpaRepository;

public interface UserRatingRepository extends JpaRepository<UserRating, Long> {
}
