package com.project.TechStackLibrary.controller;

import com.project.TechStackLibrary.model.EBook;
import com.project.TechStackLibrary.service.EBookService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/ebooks")
public class EBookController {

    private final EBookService eBookService;

    @Autowired
    public EBookController(EBookService eBookService) {
        this.eBookService = eBookService;
    }

    @GetMapping
    public List<EBook> getAllEBooks() {
        return eBookService.getAllEBooks();
    }

    @GetMapping("/{id}")
    public EBook getEBookById(@PathVariable Long id) {
        return eBookService.getEBookById(id);
    }

    @PostMapping
    public EBook createEBook(@RequestBody EBook eBook) {
        return eBookService.saveEBook(eBook);
    }

    @PutMapping("/{id}")
    public EBook updateEBook(@PathVariable Long id, @RequestBody EBook eBook) {
        eBook.setId(id);
        return eBookService.saveEBook(eBook);
    }

    @DeleteMapping("/{id}")
    public void deleteEBook(@PathVariable Long id) {
        eBookService.deleteEBook(id);
    }
}