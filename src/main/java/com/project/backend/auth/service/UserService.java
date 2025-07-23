package com.project.backend.auth.service;
import com.project.backend.auth.domain.UserDto;
import com.project.backend.auth.dto.*;
import com.project.backend.auth.repository.UserRepository;
import org.springframework.stereotype.Service;

import java.util.Optional;

@Service
public class UserService {

    private final UserRepository userRepository;

    // 생성자 주입
    public UserService(UserRepository userRepository) {
        this.userRepository = userRepository;
    }

    public Optional<UserSignUpResponseDto> signUp(UserSignUpRequestDto userSignUpRequestDto) {
        return userRepository.save(userDTO);
    }

    public Optional<UserLoginResponseDto> login(UserLoginRequestDto userLoginRequestDto) {
        return userRepository.findByAccountIdAndPassword(accountId, password);
    }

    public Optional<UserLogoutRequestDto> logout(User
                                                 ) {
        return userRepository.findById(id);
    }
}
