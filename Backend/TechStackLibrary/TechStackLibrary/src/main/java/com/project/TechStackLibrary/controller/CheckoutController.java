package com.project.TechStackLibrary.controller;

import com.project.TechStackLibrary.service.CheckoutService;
import com.project.TechStackLibrary.model.Order;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/api/checkout")
public class CheckoutController {
    private final CheckoutService checkoutService;

    public CheckoutController(CheckoutService checkoutService) {
        this.checkoutService = checkoutService;
    }

    @PostMapping
    public Order placeOrder(@RequestBody Order order) {
        return checkoutService.placeOrder(order);
    }
}
