package com.project.backend.auth.repository;

import com.project.backend.auth.domain.UserDto;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.Optional;

@Repository
public interface UserRepository extends JpaRepository<UserDto, Long> {
    Optional<UserDto> findByAccountIdAndPassword(String accountId, String password);
}
