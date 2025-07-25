package com.project.backend.auth.dto;

import lombok.*;

@Getter
@Builder
@AllArgsConstructor
@NoArgsConstructor
public class UserLoginResponseDto {
    private String accountId;
    private String password;
    private String accessToken;
    private String refreshToken;
    private String message;
}
