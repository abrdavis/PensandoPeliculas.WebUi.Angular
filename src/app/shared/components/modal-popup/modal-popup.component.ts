import { Component, EventEmitter, Input, output, Output } from '@angular/core';
import { FormsModule, NgForm, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'modal-popup',
  standalone: true,
  templateUrl: './modal-popup.component.html',
  styleUrl: './modal-popup.component.css',
  imports: [FormsModule, ReactiveFormsModule]
})
export class ModalPopupComponent {

  isDisplayed: boolean = false;
  @Output() onSubmit = new EventEmitter<any>();

  displayModal() {
    this.isDisplayed = true;
  }

  closeModal() {
    this.isDisplayed = false;
  }

  onFormSubmit(form: NgForm) {
    this.onSubmit.emit(form.value);
  }
}
