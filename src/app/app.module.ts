import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AdminComponent } from './pages/admin/admin.component';
import { HomeComponent } from './pages/home/home.component';
import { ReviewThumbnailComponent } from './shared/components/review-thumbnail/review-thumbnail.component';
import { provideHttpClient, withFetch } from '@angular/common/http';
import { provideRouter } from '@angular/router';
import routeConfig from './app.rputes';

@NgModule({
  declarations: [
    AppComponent,
    AdminComponent,
    HomeComponent,
    ReviewThumbnailComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [provideHttpClient(
    withFetch()
  ),
  provideRouter(routeConfig)],
  bootstrap: [AppComponent]
})


export class AppModule { }
