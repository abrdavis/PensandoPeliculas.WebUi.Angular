import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './pages/home/home.component';
import { ReviewThumbnailComponent } from './shared/components/review-thumbnail/review-thumbnail.component';
import { HTTP_INTERCEPTORS, provideHttpClient, withFetch, withInterceptorsFromDi } from '@angular/common/http';
import { provideRouter } from '@angular/router';
import routeConfig from './app.rputes';
import { LoginComponent } from './pages/login/login.component';
import { AuthErrorInterceptor } from './utility/interceptors/auth-interceptor';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ReviewThumbnailComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
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
