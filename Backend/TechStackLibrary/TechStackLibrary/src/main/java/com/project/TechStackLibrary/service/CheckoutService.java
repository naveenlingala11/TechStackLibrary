package com.project.TechStackLibrary.service;

import com.project.TechStackLibrary.repository.OrderRepository;
import com.project.TechStackLibrary.model.Order;
import org.springframework.stereotype.Service;

@Service
public class CheckoutService {
    private final OrderRepository orderRepository;

    public CheckoutService(OrderRepository orderRepository) {
        this.orderRepository = orderRepository;
    }

    public Order placeOrder(Order order) {
        return orderRepository.save(order);
    }
}
