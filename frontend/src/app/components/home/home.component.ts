import { Component, OnInit } from '@angular/core';
import { EBookService } from '../../service/ebook.service';
import { CommonModule } from '@angular/common';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';
import { MatIconModule } from '@angular/material/icon';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { MatTableModule } from '@angular/material/table';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatTabsModule } from '@angular/material/tabs';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { FeaturedItemComponent } from "../featured-item/featured-item.component";
import { EBook } from '../../model/EBook';

@Component({
  selector: 'app-home',
  imports: [CommonModule, RouterLink, MatToolbarModule, MatCardModule, MatButtonModule, MatInputModule, MatIconModule, MatSnackBarModule, MatTableModule, MatFormFieldModule, MatGridListModule, MatTabsModule, FeaturedItemComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent implements OnInit {
  featuredEBooks: EBook[] = [];
  featuredItems: any[] = [];
  allEBooks: EBook[] = [];

  constructor(private ebookService: EBookService) {}

  ngOnInit(): void {
    this.loadFeaturedEBooks();
    this.loadFeaturedItems();
    this.loadAllEBooks();
  }

  loadFeaturedEBooks() {
    this.ebookService.getFeaturedEBooks().subscribe(data => {
      this.featuredEBooks = data;
    });
  }

  loadFeaturedItems() {
    this.featuredItems = this.ebookService.getOtherFeaturedItems(); // Assuming this method exists
  }

  loadAllEBooks() {
    this.ebookService.getAllEBooks().subscribe(data => {
      this.allEBooks = data;
    });
  }

  addToCart(ebook: EBook) {
    // Logic to add ebook to cart
  }
}