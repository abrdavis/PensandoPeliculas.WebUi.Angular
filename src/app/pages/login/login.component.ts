import { Component } from '@angular/core';
import { AuthService } from '../../services/auth/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  standalone: false,
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
  username! :string;
  password!: string;
  constructor(private authService :AuthService,
    private router: Router
  ){
    
  }

  onLoginClick(){
    this.authService.login(this.username, this.password).subscribe(data => {
      if (data.success) {
        localStorage.setItem('user', JSON.stringify(data.user));
        this.router.navigate(['/admin']);
      }
      else{
        console.log('we did not do it')
      }
    });
  }
}
