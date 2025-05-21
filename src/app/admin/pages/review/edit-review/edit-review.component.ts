import { Component } from '@angular/core';
import { NgIf } from '@angular/common';
import { ReviewAdminComponent } from '../../../componenets/review/review-admin/review-admin.component';
import { ReviewService } from '../../../../services/reviews/review-service';
import { ActivatedRoute } from '@angular/router';
import { Review } from '../../../../models/reviewModel';
import { EditMode } from '../../../../utility/interceptors/constants/constants';
@Component({
  selector: 'app-edit-review',
  standalone: true,
  templateUrl: './edit-review.component.html',
  styleUrl: './edit-review.component.css',
  imports: [ReviewAdminComponent, NgIf]
})
export class EditReviewComponent {
  mode: string = EditMode.Update;
  reviewToEdit:Review = new Review();
  constructor(private reviewService:ReviewService,
    private route: ActivatedRoute
  ){

  }
  reviewLoaded: boolean = false;

  ngOnInit(){
    const reviewId =  Number(this.route.snapshot.paramMap.get('id'))
    this.reviewService.getReviewForId(reviewId).subscribe(res =>{
      this.reviewToEdit = res;
      this.reviewLoaded = true;
    } )
  }
}
