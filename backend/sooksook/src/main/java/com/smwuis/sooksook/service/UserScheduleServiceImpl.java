package com.smwuis.sooksook.service;

import com.smwuis.sooksook.repository.UserScheduleRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

@Service
@RequiredArgsConstructor
public class UserScheduleServiceImpl implements UserScheduleService{

    private final UserScheduleRepository userScheduleRepository;
}
