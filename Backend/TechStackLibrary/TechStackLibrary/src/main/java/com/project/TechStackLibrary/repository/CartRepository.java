package com.project.TechStackLibrary.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import com.project.TechStackLibrary.model.CartItem;

public interface CartRepository extends JpaRepository<CartItem, Long> {}
