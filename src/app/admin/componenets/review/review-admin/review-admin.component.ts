import { Component, computed, Input, ViewChild } from '@angular/core';
import { Review } from '../../../../models/reviewModel';
import { InsertTitleModalComponent } from '../../title/insert-title-modal-component';
import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { MatFormFieldModule } from '@angular/material/form-field';
import { AsyncPipe, CommonModule } from '@angular/common';
import { Title } from '../../../../models/titleModel';
import { debounceTime, Observable, switchMap } from 'rxjs';
import { FormControl, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { TitleService } from '../../../../services/titles/title-service';
import { MatInputModule } from '@angular/material/input';
import { EditMode } from '../../../../utility/interceptors/constants/constants';
import { ReviewService } from '../../../../services/reviews/review-service';
import { MatButtonModule } from '@angular/material/button';

@Component({
  selector: 'review-admin',
  standalone: true,
  templateUrl: './review-admin.component.html',
  styleUrl: './review-admin.component.css',
  imports: [CommonModule, InsertTitleModalComponent, FormsModule, ReactiveFormsModule, MatFormFieldModule, MatButtonModule, MatInputModule, MatAutocompleteModule, AsyncPipe]
})
export class ReviewAdminComponent {

  @Input() review!: Review;
  @Input({ required: true }) mode: String = ''
  @ViewChild(InsertTitleModalComponent) insertTitleModal?: InsertTitleModalComponent;
  filteredTitles!: Observable<Title[]>;
  updateMode: string = EditMode.Update;
  insertMode: string = EditMode.Insert;
  headerImage: string = '';

  reviewForm = new FormGroup({

    titleIdForReview: new FormControl<number>(0, [Validators.min(1)]),
    titleForReview: new FormControl<Title | ''>('', [Validators.required]),
    reviewTitle: new FormControl<string>('', [Validators.required]),
    reviewText: new FormControl<string>('', [Validators.required]),
    reviewRating: new FormControl<number>(1,
      [Validators.required,
      Validators.min(1),
      Validators.max(10),
      Validators.pattern(/^\d*\.?\d{1}$/)]),
    headerImgUrl: new FormControl<string>('')
  });

  constructor(private titleService: TitleService,
    private reviewService: ReviewService
  ) {


  }



  onHeaderImageSelect(event: any) {
    const headerImg = event.target.files[0];
    if (headerImg) {
      let reader = new FileReader();

      reader.onload = (event: any) => {
        this.reviewForm.patchValue({
          headerImgUrl: event.target.result
        });
      }

      reader.readAsDataURL(headerImg);
    }
  }

  titleSelected(title: Title) {
    this.reviewForm.patchValue({ titleIdForReview: title.titleId });
  }

  getPosterImageUrl(): string {
    const title: Title = this.reviewForm.get('titleForReview')?.value as Title;
    if (title) {
      return title.posterUrl ?? '';
    }
    else {
      return '';
    }
  }



  ngOnInit() {
    this.filteredTitles = this.reviewForm.get('titleForReview')!.valueChanges.pipe(
      debounceTime(300),
      switchMap(value => this.titleService.getTitlesForFilter(value as string))
    );

    if (this.review !== undefined) {
      const title = new Title(this.review.reviewTitleId, this.review.titleName, this.review.posterUrl, '');
      this.reviewForm.patchValue(
        {
          titleForReview: title,
          titleIdForReview: title.titleId,
          reviewTitle: this.review.reviewTitle,
          reviewText: this.review.reviewText,
          reviewRating: this.review.reviewRating,
          headerImgUrl: this.review.headerImageUrl
        }
      );

    }

  }
  showAddTitleModal() {
    this.insertTitleModal!.displayModal();
  }
  onModalTitleClick(eventData: any) {
    console.log(eventData);
  }

  titleDisplayAutoComplete(title: Title) {
    return title && title.titleName ? title.titleName : '';
  }
  insertReviewClick() {
    const titleId = this.reviewForm.get('titleIdForReview');
    if (this.isValid()) {
      const title: Title = this.reviewForm.get('titleForReview')?.value as Title;
      console.log(title);
    }
  }

  updateReviewClick() {
    if (this.isValid()) {
      const titleId = this.reviewForm.get('titleIdForReview')?.value as number;
      this.reviewService.updateReview(this.review.reviewId,
        titleId,
        this.reviewForm.get('reviewRating')?.value as number,
        this.reviewForm.get('reviewText')?.value as string,
        this.reviewForm.get('reviewTitle')?.value as string,
        ''

      ).subscribe(res => {
        console.log(res)
      });
    }
  }

  isValid() {
    if (!this.reviewForm.valid) {
      return false;
    }

    return true;
  }
}
