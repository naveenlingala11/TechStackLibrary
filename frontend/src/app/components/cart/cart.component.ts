import { Component, OnInit } from '@angular/core';
import { EBookService } from '../../service/ebook.service';
import { CommonModule } from '@angular/common';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { MatTableModule } from '@angular/material/table';
import { MatToolbarModule } from '@angular/material/toolbar';

@Component({
  selector: 'app-cart',
  imports: [CommonModule,MatToolbarModule,MatCardModule,MatButtonModule,MatInputModule,MatIconModule,MatSnackBarModule,MatTableModule,MatFormFieldModule,MatGridListModule],
  templateUrl: './cart.component.html',
  styleUrl: './cart.component.css'
})
export class CartComponent {
  cartItems: any[] = [];

  displayedColumns: string[] = ['title', 'price', 'actions'];

  removeFromCart(item: any): void {
    this.cartItems = this.cartItems.filter((cartItem) => cartItem !== item);
  }

  getTotalPrice(): number {
    return this.cartItems.reduce((total, item) => total + item.price, 0);
  }

  checkout(): void {
    console.log('Proceeding to checkout');
  }
}