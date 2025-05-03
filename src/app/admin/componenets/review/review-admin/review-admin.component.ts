import { Component, Input, ViewChild } from '@angular/core';
import { Review } from '../../../../models/reviewModel';
import { ModalPopupComponent } from '../../../../shared/components/modal-popup/modal-popup.component';

@Component({
  selector: 'review-admin',
  standalone: false,
  templateUrl: './review-admin.component.html',
  styleUrl: './review-admin.component.css',
})
export class ReviewAdminComponent {
  @Input() review: Review = new Review()
  @Input() mode: String = ''
  @ViewChild(ModalPopupComponent) childComponent!: ModalPopupComponent;


  showAddTitleModal(addTitleModal: ModalPopupComponent) {
    addTitleModal.displayModal();
  }
  onModalTitleClick(eventData: any) {
    console.log(eventData);
  }
}
