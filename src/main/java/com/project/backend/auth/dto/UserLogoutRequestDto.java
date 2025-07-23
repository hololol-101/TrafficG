package com.project.backend.auth.dto;

public class UserLogoutRequestDto {
    private String accountId;
    private String accessToken;
    private String refreshToken;

    public UserLogoutRequestDto() {
    }

    public UserLogoutRequestDto(String accountId, String accessToken, String refreshToken) {
        this.accountId = accountId;
        this.accessToken = accessToken;
        this.refreshToken = refreshToken;
    }

    public String getAccountId() {
        return accountId;
    }

    public void setAccountId(String accountId) {
        this.accountId = accountId;
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
}
