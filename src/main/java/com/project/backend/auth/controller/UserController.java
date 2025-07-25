package com.project.backend.auth.controller;

import com.project.backend.auth.domain.User;
import com.project.backend.auth.dto.UserLoginRequestDto;
import com.project.backend.auth.dto.UserLoginResponseDto;
import com.project.backend.auth.dto.UserSignUpRequestDto;
import com.project.backend.auth.dto.UserSignUpResponseDto;
import com.project.backend.auth.service.UserService;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/api/auth")
public class UserController {

    private final UserService userService;

    // 생성자 주입
    public UserController(UserService userService) {
        this.userService = userService;
    }

    @PostMapping("/signup")
    public ResponseEntity<String> signUp(@RequestBody UserSignUpRequestDto userSignUpRequestDto) {
        User savedUser = userService.signUp(userSignUpRequestDto);
        UserSignUpResponseDto userSignUpResponseDto = new UserSignUpResponseDto();
        return ResponseEntity.ok("회원가입 성공");
    }

    @PostMapping("/login")
    public ResponseEntity<UserLoginResponseDto> login(@RequestBody UserLoginRequestDto userLoginRequestDto) {
        return ResponseEntity.ok(userService.login(userLoginRequestDto));
    }
    /*
    @PostMapping("/logout/{id}")
    public ResponseEntity<User> getUser(@PathVariable Long id) {
        return userService.logout(id)
                .map(ResponseEntity::ok)
                .orElse(ResponseEntity.notFound().build());
    }*/
}
