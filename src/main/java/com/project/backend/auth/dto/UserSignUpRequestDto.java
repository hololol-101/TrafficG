package com.project.backend.auth.dto;

import jakarta.validation.constraints.NotBlank;
import jakarta.validation.constraints.Pattern;
import lombok.*;

@Getter
@Builder
@AllArgsConstructor
@NoArgsConstructor
public class UserSignUpRequestDto {
    @NotBlank
    @Pattern(
            regexp = "^[a-zA-Z][a-zA-Z\\d]{6,19}",
            message = "id는 영어로 시작하고 영문자, 숫자를 포함한 7~20자여야 합니다."
    )
    private String accountId;
    @NotBlank
    @Pattern(
            regexp = "^(?=.*[a-zA-Z])(?=.*\\d)(?=.*[!@#$%^&*()])[a-zA-Z\\d!@#$%^&*()]{8,12}$",
            message = "비밀번호는 영문자, 숫자, 특수문자를 포함한 8~12자여야 합니다."
    )
    private String password;
    private String name;
    private String email;
    private String phoneNumber;
    private String address;
}
