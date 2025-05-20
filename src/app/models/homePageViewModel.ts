import { Review } from "./reviewModel";

export class HomePageViewModel{
  [x: string]: any;
    recentReleasedReviews: Array<Review> = [];
     recentReviews: Array<Review> = [];
     constructor(recentReview: Array<Review>,
        newestReviews: Array<Review>
     ){
        this.recentReleasedReviews = recentReview;
        this.recentReviews = newestReviews;
     }


}