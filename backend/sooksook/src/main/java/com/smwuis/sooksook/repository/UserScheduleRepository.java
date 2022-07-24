package com.smwuis.sooksook.repository;

import com.smwuis.sooksook.domain.user.UserSchedule;
import org.springframework.data.jpa.repository.JpaRepository;

public interface UserScheduleRepository extends JpaRepository<UserSchedule, Long> {
}
