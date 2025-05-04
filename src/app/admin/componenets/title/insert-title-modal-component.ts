import { Component, EventEmitter, Input, output, Output } from '@angular/core';
import { FormControl, FormGroup, FormsModule, NgForm, ReactiveFormsModule } from '@angular/forms';
import { TitleService } from '../../../services/titles/title-service';

@Component({
  selector: 'insert-title-modal',
  standalone: true,
  templateUrl: './insert-title-modal-component.html',
  styleUrl: './insert-title-modal-component.css',
  imports: [FormsModule, ReactiveFormsModule]
})
export class InsertTitleModalComponent {
  titleForm = new FormGroup({
    titleName: new FormControl<string | null>(''),
    releaseDate: new FormControl<Date | null>(null),
    titleDuration: new FormControl<number | null>(null),
    titlePoster: new FormControl<File | null>(null),
    titleGenreId: new FormControl<number | null>(null)
  });
  constructor(private titleService: TitleService) {

  }
  isDisplayed: boolean = false;
  @Output() onSubmit = new EventEmitter<any>();

  displayModal() {
    this.isDisplayed = true;
  }

  closeModal() {
    this.isDisplayed = false;
  }

  onTitlePosterSelect(e: any) {
    console.log(e)
  }

  insertTitleClick() {
    if (this.titleForm.valid) {
      const formValues: FormGroup = this.titleForm.value as FormGroup;
      this.titleService.insertTitle(
        this.titleForm.get('titleDuration')?.value as number,
        this.titleForm.get('titleName')?.value as string,
        this.titleForm.get('titleGenreId')?.value as number,
        this.titleForm.get('releaseDate')?.value as Date,
        this.titleForm.get('titlePoster')?.value as File,
      ).subscribe(res =>{
        console.log(res);
      })

      this.onSubmit.emit({});
    }
    
  }
}
