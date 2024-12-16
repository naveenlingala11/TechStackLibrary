package com.project.TechStackLibrary.service;

import com.project.TechStackLibrary.repository.CartRepository;
import com.project.TechStackLibrary.model.CartItem;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class CartService {
    private final CartRepository cartRepository;

    public CartService(CartRepository cartRepository) {
        this.cartRepository = cartRepository;
    }

    public List<CartItem> getCartItems() {
        return cartRepository.findAll();
    }

    public CartItem addToCart(CartItem cartItem) {
        return cartRepository.save(cartItem);
    }

    public void clearCart() {
        cartRepository.deleteAll();
    }
}
