package com.minet.userservice.repository;

import com.minet.userservice.entity.User;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.Optional;

public interface UserRepository extends JpaRepository<User,Long> {

    Optional<User> findById(String id);

    User findByEmail(String email);
}
