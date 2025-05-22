export class Review {
  reviewId!: number;
  reviewDate!: Date;
  reviewText!: string;
  reviewTitle!: string;
  reviewTitleId!: number;
  reviewRating!: number;
  posterUrl!: string;
  posterThumbnailUrl!: string;
  headerImageUrl!: string;
  isVisible!: boolean;
  titleName!: string;
  slug!: string;
  reviewAuthor!: string;
  releaseDate!: Date;

  constrcutor(reviewId: number,
    reviewDate: Date,
    reviewText: string,
    reviewTitle: string,
    reviewTitleId: number,
    reviewRating: number,
    posterUrl: string,
    posterThumbnailUrl: string,
    headerImageUrl: string,
    isVisible: boolean,
    titleName: string,
    slug: string,
    reviewAuthor: string,
    releaseDate: Date) {
      this.releaseDate = releaseDate;
      this.reviewId = reviewId;
      this.reviewDate = reviewDate;
      this.reviewText = reviewText;
      this.reviewTitle = reviewTitle;
      this.reviewTitleId = reviewTitleId;
      this.reviewRating = reviewRating;
      this.posterUrl = posterUrl;
      this.posterThumbnailUrl = posterThumbnailUrl;
      this.headerImageUrl = headerImageUrl;
      this.isVisible = isVisible;
      this.titleName = titleName;
      this.slug = slug;
      this.reviewAuthor = reviewAuthor;
      this.releaseDate = releaseDate;
  }
}
