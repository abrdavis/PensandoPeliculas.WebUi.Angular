import { Review } from "./reviewModel";

export class HomePageViewModel{
  [x: string]: any;
    recentReleasedReviews: Array<Review> = [];
     newestReviews: Array<Review> = [];
     constructor(recentReview: Array<Review>,
        newestReviews: Array<Review>
     ){
        this.recentReleasedReviews = recentReview;
        this.newestReviews = newestReviews;
     }
}