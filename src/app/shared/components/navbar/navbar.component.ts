import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../../../services/auth/auth.service';

@Component({
  selector: 'app-navbar',
  standalone: false,
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css'
})
export class NavbarComponent {
  userName: String = localStorage.getItem('user') || '';
  constructor(private authService: AuthService,
    private router: Router) {

  }
  logout() {
    this.authService.logout().subscribe(res => {
      this.router.navigate(['/']);
    })

  }

  isLoggedIn(): boolean{
      return this.authService.isLoggedIn();
    }
}
