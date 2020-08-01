package com.costtracker.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.costtracker.model.Cost;

@Repository
public interface CostRepository extends JpaRepository<Cost, Long> {

}
