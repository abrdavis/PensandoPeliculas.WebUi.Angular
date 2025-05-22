import { Component, Input } from '@angular/core';
import { Review } from '../../../models/review.model';

@Component({
  selector: 'review-thumbnail',
  standalone: true,
  templateUrl: './review-thumbnail.component.html',
  styleUrl: './review-thumbnail.component.css'
})
export class ReviewThumbnailComponent {
  @Input() reviews: Array<Review> = [];
}
