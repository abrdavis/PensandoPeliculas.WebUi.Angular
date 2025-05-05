import { ChangeDetectionStrategy, ChangeDetectorRef, Component, EventEmitter,  OnInit,  Output } from '@angular/core';
import { FormControl, FormGroup, FormsModule, NgForm, ReactiveFormsModule } from '@angular/forms';
import { TitleService } from '../../../services/titles/title-service';
import { FeatherIconsModule } from '../../../shared/modules/feather-icons-module/feather.module';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatButtonModule} from '@angular/material/button';
import {MatDatepickerModule} from '@angular/material/datepicker';
import {provideNativeDateAdapter} from '@angular/material/core';
import { Genre } from '../../../models/genreModel';
import { map, Observable, startWith } from 'rxjs';
import { MetaDataService } from '../../../services/metadata/meta-data.service.';
import {AsyncPipe} from '@angular/common';
import {MatAutocompleteModule} from '@angular/material/autocomplete';

@Component({
  selector: 'insert-title-modal',
  standalone: true,
  templateUrl: './insert-title-modal-component.html',
  styleUrl: './insert-title-modal-component.css',
  providers: [provideNativeDateAdapter()],
  imports: [FormsModule, ReactiveFormsModule, FeatherIconsModule, MatFormFieldModule, MatInputModule, MatButtonModule, MatDatepickerModule, MatAutocompleteModule, AsyncPipe],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class InsertTitleModalComponent implements OnInit {
  titleForm = new FormGroup({
    titleName: new FormControl<string | null>(''),
    releaseDate: new FormControl<Date | null>(null),
    titleDuration: new FormControl<number | null>(null),
    titlePoster: new FormControl<File | null>(null),
    genreForTitle: new FormControl<Genre | ''>('')
  });
  constructor(private titleService: TitleService,
    private metaDataService : MetaDataService,
    private cd: ChangeDetectorRef) {

  }
  allGenres: Genre[] = []
  filteredGenres!: Observable<Genre[]>;
  isDisplayed: boolean = false;
  @Output() onSubmit = new EventEmitter<any>();

  private _filter(value: string): Genre[] {
    const filterValue = value.toLowerCase();

    return this.allGenres.filter(option => option.genreName.toLowerCase().includes(filterValue));
  }

  ngOnDestory(){
    console.log('destroyed');
  }

  ngOnInit(){
    this.metaDataService.getGenres().subscribe(res =>{
      this.allGenres = res;
    })

    this.filteredGenres = this.titleForm.get('genreForTitle')!.valueChanges.pipe(
      startWith(''),
      map(value => {
        const name = typeof value === 'string' ? value : value?.genreName;
        return name ? this._filter(name as string) : this.allGenres.slice();
      }),
    );
  }

  displayFn(genre: Genre): string {
    return genre && genre.genreName ? genre.genreName : '';
  }

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
        (this.titleForm.get('genreForTitle')?.value as Genre).genreId,
        this.titleForm.get('releaseDate')?.value as Date,
        this.titleForm.get('titlePoster')?.value as File,
      ).subscribe(res =>{
        console.log(res);
      })

      this.onSubmit.emit({});
    }
    
  }
}
