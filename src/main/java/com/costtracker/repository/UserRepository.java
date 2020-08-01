package com.costtracker.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.costtracker.model.User;

@Repository
public interface UserRepository extends JpaRepository<User, Long> {

}
