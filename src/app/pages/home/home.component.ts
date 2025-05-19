import { Component } from '@angular/core';
import { HomePageViewModel } from '../../models/homePageViewModel';
import { ReviewService } from '../../services/reviews/review-service';
import { ReviewThumbnailComponent } from '../../shared/components/review-thumbnail/review-thumbnail.component';

@Component({
  selector: 'app-home',
  standalone: false,
  templateUrl: './home.component.html',
  styleUrl: './home.component.css',

})
export class HomeComponent {
  viewModel! : HomePageViewModel;
  
  constructor(private reviewService: ReviewService){

  }
  ngOnInit() {
    this.reviewService.getHomePageViewModel().subscribe(data => {
      this.viewModel = data.pageModel;
      console.log(this.viewModel)
    });
      
  }
}
