package com.project.TechStackLibrary.repository;

import com.project.TechStackLibrary.model.EBook;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface EBookRepository extends JpaRepository<EBook, Long> {
}