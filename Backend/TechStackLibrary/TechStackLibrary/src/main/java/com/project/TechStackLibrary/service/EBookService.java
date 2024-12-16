package com.project.TechStackLibrary.service;

import com.project.TechStackLibrary.model.EBook;
import com.project.TechStackLibrary.repository.EBookRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;
import java.util.Optional;

@Service
public class EBookService {

    private final EBookRepository eBookRepository;

    @Autowired
    public EBookService(EBookRepository eBookRepository) {
        this.eBookRepository = eBookRepository;
    }

    public List<EBook> getAllEBooks() {
        return eBookRepository.findAll();
    }

    public EBook getEBookById(Long id) {
        return eBookRepository.findById(id).orElse(null);
    }

    public EBook saveEBook(EBook eBook) {
        return eBookRepository.save(eBook);
    }

    public void deleteEBook(Long id) {
        eBookRepository.deleteById(id);
    }
}