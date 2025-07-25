package com.project.backend.auth.dto;

import lombok.*;

@Getter
@Builder
@AllArgsConstructor
@NoArgsConstructor
public class UserLogoutResponseDto {
    private String accountId;
    private String password;
    private String name;
    private String email;
    private String phoneNumber;
    private String address;

}
