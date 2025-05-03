import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './pages/home/home.component';
import { ReviewThumbnailComponent } from './shared/components/review-thumbnail/review-thumbnail.component';
import { HTTP_INTERCEPTORS, provideHttpClient, withFetch, withInterceptorsFromDi } from '@angular/common/http';
import { provideRouter, RouterLink } from '@angular/router';
import routeConfig from './app.rputes';
import { LoginComponent } from './pages/login/login.component';
import { AuthErrorInterceptor } from './utility/interceptors/auth-interceptor';
import { NavbarComponent } from './shared/components/navbar/navbar.component';
import { ModalPopupComponent } from './shared/components/modal-popup/modal-popup.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ReviewThumbnailComponent,
    LoginComponent,
    NavbarComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    RouterLink,
    ModalPopupComponent
  ],
  providers: [provideHttpClient(
    withFetch(),
    withInterceptorsFromDi()
  ),
  {
    provide: HTTP_INTERCEPTORS,
    useClass: AuthErrorInterceptor,
    multi: true,
  },
  provideRouter(routeConfig)],
  bootstrap: [AppComponent]
})


export class AppModule { }
