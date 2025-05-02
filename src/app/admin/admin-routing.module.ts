import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminHomeComponent } from './pages/admin-home/admin-home.component';
import { InsertReviewComponent } from './pages/review/insert-review/insert-review.component';
import { EditReviewComponent } from './pages/review/edit-review/edit-review.component';

const routes: Routes = [
  { path: '', component: AdminHomeComponent },
  { path: 'review/insert', component: InsertReviewComponent },
  { path: 'review/:id', component: EditReviewComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
