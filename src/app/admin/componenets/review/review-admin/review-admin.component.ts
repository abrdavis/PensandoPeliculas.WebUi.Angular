import { Component, Input, ViewChild } from '@angular/core';
import { Review } from '../../../../models/reviewModel';
import { InsertTitleModalComponent } from '../../title/insert-title-modal-component';
import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { MatFormFieldModule } from '@angular/material/form-field';
import { AsyncPipe } from '@angular/common';
import { Title } from '../../../../models/titleModel';
import { debounceTime, Observable, switchMap } from 'rxjs';
import { FormControl, FormGroup, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { TitleService } from '../../../../services/titles/title-service';
import { MatInputModule } from '@angular/material/input';

@Component({
  selector: 'review-admin',
  standalone: true,
  templateUrl: './review-admin.component.html',
  styleUrl: './review-admin.component.css',
  imports: [InsertTitleModalComponent, FormsModule, ReactiveFormsModule, MatFormFieldModule, MatInputModule, MatAutocompleteModule, AsyncPipe]
})
export class ReviewAdminComponent {
  @Input() review: Review = new Review()
  @Input() mode: String = ''
  @ViewChild(InsertTitleModalComponent) childComponent!: InsertTitleModalComponent;
  filteredTitles!: Observable<Title[]>;

  reviewForm = new FormGroup({
    titleForReview: new FormControl<Title | ''>(''),
  });

  constructor(private titleService: TitleService) {

  }

  ngOnInit() {
    this.filteredTitles = this.reviewForm.get('titleForReview')!.valueChanges.pipe(
      debounceTime(300), 
      switchMap(value => this.titleService.getTitlesForFilter(value as string))
    );
  }
  showAddTitleModal(addTitleModal: InsertTitleModalComponent) {
    addTitleModal.displayModal();
  }
  onModalTitleClick(eventData: any) {
    console.log(eventData);
  }

  titleDisplayAutoComplete(title: Title) {
    return title && title.titleName ? title.titleName : '';
  }
}
