import { Component } from '@angular/core';
import { ReviewAdminComponent } from '../../../componenets/review/review-admin/review-admin.component';
import { ReviewApiService } from '../../../../services/reviews/review-api.service';
import { ActivatedRoute } from '@angular/router';
import { Review } from '../../../../models/reviewModel';

@Component({
  selector: 'app-edit-review',
  standalone: true,
  templateUrl: './edit-review.component.html',
  styleUrl: './edit-review.component.css',
  imports: [ReviewAdminComponent]
})
export class EditReviewComponent {

  reviewToEdit:Review = new Review();
  constructor(private reviewService:ReviewApiService,
    private route: ActivatedRoute
  ){

  }

  ngOnInit(){
    const reviewId =  Number(this.route.snapshot.paramMap.get('id'))
    this.reviewService.getReviewForId(reviewId).subscribe(res =>{
      this.reviewToEdit = res;
    } )
  }
}
