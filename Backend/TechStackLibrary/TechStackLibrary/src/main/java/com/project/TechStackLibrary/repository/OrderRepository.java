package com.project.TechStackLibrary.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import com.project.TechStackLibrary.model.Order;

public interface OrderRepository extends JpaRepository<Order, Long> {}
