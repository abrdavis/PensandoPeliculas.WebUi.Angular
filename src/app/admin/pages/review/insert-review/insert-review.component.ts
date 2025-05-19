import { Component } from '@angular/core';
import { ReviewAdminComponent } from '../../../componenets/review/review-admin/review-admin.component';
import { EditMode } from '../../../../utility/interceptors/constants/constants';

@Component({
  selector: 'app-insert-review',
  standalone: true,
  templateUrl: './insert-review.component.html',
  styleUrl: './insert-review.component.css',
  imports: [ReviewAdminComponent]
})
export class InsertReviewComponent {
mode: string = EditMode.Insert;

}
