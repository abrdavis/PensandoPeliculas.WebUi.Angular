import { ChangeDetectionStrategy, ChangeDetectorRef, Component, EventEmitter, Input, output, Output } from '@angular/core';
import { FormControl, FormGroup, FormsModule, NgForm, ReactiveFormsModule } from '@angular/forms';
import { TitleService } from '../../../services/titles/title-service';
import { FeatherIconsModule } from '../../../shared/modules/feather-icons-module/feather.module';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatButtonModule} from '@angular/material/button';
import {MatDatepickerModule} from '@angular/material/datepicker';
import {provideNativeDateAdapter} from '@angular/material/core';

@Component({
  selector: 'insert-title-modal',
  standalone: true,
  templateUrl: './insert-title-modal-component.html',
  styleUrl: './insert-title-modal-component.css',
  providers: [provideNativeDateAdapter()],
  imports: [FormsModule, ReactiveFormsModule, FeatherIconsModule, MatFormFieldModule, MatInputModule, MatButtonModule, MatDatepickerModule],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class InsertTitleModalComponent {
  titleForm = new FormGroup({
    titleName: new FormControl<string | null>(''),
    releaseDate: new FormControl<Date | null>(null),
    titleDuration: new FormControl<number | null>(null),
    titlePoster: new FormControl<File | null>(null),
    titleGenreId: new FormControl<number | null>(null)
  });
  constructor(private titleService: TitleService,
    private cd: ChangeDetectorRef) {

  }
  isDisplayed: boolean = false;
  @Output() onSubmit = new EventEmitter<any>();

  onOverlayClick(){
    this.closeModal();
  }
  displayModal() {
    this.isDisplayed = true;
    this.cd.markForCheck();
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
