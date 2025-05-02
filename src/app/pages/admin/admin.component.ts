import { Component, Input } from '@angular/core';
import { Review } from '../../models/reviewModel';

@Component({
  selector: 'app-admin',
  standalone: false,
  templateUrl: './admin.component.html',
  styleUrl: './admin.component.css'
})
export class AdminComponent {
  @Input() recentReviews: Array<Review> = [];
  @Input() newestReviews: Array<Review> = [];


}
