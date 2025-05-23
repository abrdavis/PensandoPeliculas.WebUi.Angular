import { Component } from '@angular/core';
import { HomePageViewModel } from '../../models/home-page.model';
import { ReviewService } from '../../services/reviews/review.service';


@Component({
  selector: 'app-home',
  standalone: false,
  templateUrl: './home.component.html',
  styleUrl: './home.component.css',

})
export class HomeComponent {
  viewModel : HomePageViewModel = new HomePageViewModel([], []);
  
  constructor(private reviewService: ReviewService){

  }
  ngOnInit() {
    this.reviewService.getHomePageViewModel().subscribe(data => {
      this.viewModel = data.pageModel;
      console.log(this.viewModel)
    });
      
  }
}
