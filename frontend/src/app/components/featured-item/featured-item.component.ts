import { Component, Input } from '@angular/core';
import { MatCard, MatCardContent, MatCardHeader, MatCardSubtitle, MatCardTitle } from '@angular/material/card';
import { EBook } from '../../model/EBook';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-featured-item',
  imports: [CommonModule,MatCardTitle, MatCardSubtitle, MatCard, MatCardHeader, MatCardContent],
  templateUrl: './featured-item.component.html',
  styleUrl: './featured-item.component.css'
})
export class FeaturedItemComponent {
  @Input() ebook: EBook | undefined;
}
