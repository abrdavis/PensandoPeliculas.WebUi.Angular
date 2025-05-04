import { Component } from '@angular/core';
import { Review } from '../../../../models/reviewModel';
import { ReviewAdminComponent } from '../../../componenets/review/review-admin/review-admin.component';

@Component({
  selector: 'app-insert-review',
  standalone: true,
  templateUrl: './insert-review.component.html',
  styleUrl: './insert-review.component.css',
  imports: [ReviewAdminComponent]
})
export class InsertReviewComponent {


}
