import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminRoutingModule } from './admin-routing.module';
import { AdminHomeComponent } from './pages/admin-home/admin-home.component';
import { ReviewAdminComponent } from './componenets/review/review-admin/review-admin.component';
import { InsertReviewComponent } from './pages/review/insert-review/insert-review.component';
import { EditReviewComponent } from './pages/review/edit-review/edit-review.component';
import { ModalPopupComponent } from '../shared/components/modal-popup/modal-popup.component';


@NgModule({
  declarations: [
    AdminHomeComponent,
    ReviewAdminComponent,
    InsertReviewComponent,
    EditReviewComponent,
  ],
  imports: [
    CommonModule,
    AdminRoutingModule,
    ModalPopupComponent
  ]
})
export class AdminModule { }
