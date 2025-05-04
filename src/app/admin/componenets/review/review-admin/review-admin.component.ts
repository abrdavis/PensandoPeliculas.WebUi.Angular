import { Component, Input, ViewChild } from '@angular/core';
import { Review } from '../../../../models/reviewModel';
import { InsertTitleModalComponent } from '../../title/insert-title-modal-component';

@Component({
  selector: 'review-admin',
  standalone: true,
  templateUrl: './review-admin.component.html',
  styleUrl: './review-admin.component.css',
  imports: [InsertTitleModalComponent]
})
export class ReviewAdminComponent {
  @Input() review: Review = new Review()
  @Input() mode: String = ''
  @ViewChild(InsertTitleModalComponent) childComponent!: InsertTitleModalComponent;


  showAddTitleModal(addTitleModal: InsertTitleModalComponent) {
    addTitleModal.displayModal();
  }
  onModalTitleClick(eventData: any) {
    console.log(eventData);
  }
}
