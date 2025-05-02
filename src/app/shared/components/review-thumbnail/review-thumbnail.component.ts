import { Component, Input } from '@angular/core';
import { Review } from '../../../models/reviewModel';

@Component({
  selector: 'review-thumbnail',
  standalone: false,
  templateUrl: './review-thumbnail.component.html',
  styleUrl: './review-thumbnail.component.css'
})
export class ReviewThumbnailComponent {
  @Input() reviews: Array<Review> = [];
}
