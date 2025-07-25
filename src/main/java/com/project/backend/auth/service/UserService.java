package com.project.backend.auth.service;
import com.project.backend.auth.domain.User;
import com.project.backend.auth.dto.*;
import com.project.backend.auth.repository.UserRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

import java.util.Optional;

@RequiredArgsConstructor
@Service
public class UserService{

    private final UserRepository userRepository;
    private final PasswordEncoder passwordEncoder;



    public User signUp(UserSignUpRequestDto userSignUpRequestDto) {
        // 1. 중복 ID 체크
        if (userRepository.findByAccountId(userSignUpRequestDto.getAccountId()).isPresent()) {
            throw new IllegalArgumentException("이미 존재하는 아이디입니다.");
        }

        String encodePassword = passwordEncoder.encode(userSignUpRequestDto.getPassword());

        User user = User.builder()
                        .accountId(userSignUpRequestDto.getAccountId())
                        .password(encodePassword)
                        .name(userSignUpRequestDto.getName())
                        .email(userSignUpRequestDto.getEmail())
                        .phoneNumber(userSignUpRequestDto.getPhoneNumber())
                        .address(userSignUpRequestDto.getAddress())
                .build();

        return userRepository.save(user);
    }

    public UserLoginResponseDto login(UserLoginRequestDto userLoginRequestDto) {
        String accountId = userLoginRequestDto.getAccountId();
        String password = userLoginRequestDto.getPassword();
        Optional<User> optionalUser = userRepository.findByAccountId(accountId);

        return  optionalUser.filter(user -> user.matchPassword(password, passwordEncoder))
                .map(user -> UserLoginResponseDto.builder()
                        .accountId(user.getAccountId())
                        .build())
                .orElse(null);
    }

}
