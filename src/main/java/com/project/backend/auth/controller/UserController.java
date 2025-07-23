package com.project.backend.auth.controller;

import com.project.backend.auth.domain.UserDto;
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
    public UserSignUpResponseDto signUp(@RequestBody UserSignUpRequestDto userSignUpRequestDto) {
        UserDto savedUserDto = userService.signUp(userSignUpRequestDto);
        UserSignUpResponseDto userSignUpResponseDto = new UserSignUpResponseDto();
        return UserSignUpResponseDto;
    }

    @PostMapping("/login")
    public ResponseEntity<UserDto> login(
            @RequestParam String accountId,
            @RequestParam String password) {
        return userService.login(accountId, password)
                .map(ResponseEntity::ok)
                .orElse(ResponseEntity.status(401).build());
    }

    @PostMapping("/logout")
    public ResponseEntity<UserDto> getUser(@PathVariable Long id) {
        return userService.findById(id)
                .map(ResponseEntity::ok)
                .orElse(ResponseEntity.notFound().build());
    }
}
