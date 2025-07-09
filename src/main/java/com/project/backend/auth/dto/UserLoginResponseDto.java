package com.project.backend.auth.dto;

public class UserLoginResponseDto {
    private String accountId;
    private String password;
    private String accessToken;
    private String refreshToken;
    private String message;

    public UserLoginResponseDto() {
    }

    public UserLoginResponseDto(String accountId, String password, String accessToken, String refreshToken, String message) {
        this.accountId = accountId;
        this.password = password;
        this.accessToken = accessToken;
        this.refreshToken = refreshToken;
        this.message = message;
    }

    public String getAccountId() {
        return accountId;
    }

    public void setAccountId(String accountId) {
        this.accountId = accountId;
    }

    public String getPassword() {
        return password;
    }

    public void setPassword(String password) {
        this.password = password;
    }

    public String getAccessToken() {
        return accessToken;
    }

    public void setAccessToken(String accessToken) {
        this.accessToken = accessToken;
    }

    public String getRefreshToken() {
        return refreshToken;
    }

    public void setRefreshToken(String refreshToken) {
        this.refreshToken = refreshToken;
    }

    public String getMessage() {
        return message;
    }

    public void setMessage(String message) {
        this.message = message;
    }
}
