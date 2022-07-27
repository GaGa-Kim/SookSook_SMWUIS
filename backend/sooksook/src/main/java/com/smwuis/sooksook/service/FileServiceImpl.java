package com.smwuis.sooksook.service;


import com.smwuis.sooksook.repository.FilesRepository;
import com.smwuis.sooksook.repository.UserRatingRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

@Service
@RequiredArgsConstructor
public class FileServiceImpl implements FilesService {

    private final FilesRepository filesRepository;
}
