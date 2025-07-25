package com.project.backend.auth.repository;

import com.project.backend.auth.domain.User;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.Optional;

@Repository
public interface UserRepository extends JpaRepository<User, Long> {
    Optional<User> findByAccountIdAndPassword(String accountId, String password);

    Optional<User> findByAccountId(String accountId);
}
