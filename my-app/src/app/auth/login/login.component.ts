import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AuthService } from '../../auth.service';
import { Router } from '@angular/router'; // ✅ Correct


@Component({
  selector: 'app-login',
  imports: [CommonModule,FormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent {
showPassword = false;
constructor(private authService: AuthService, private router: Router) {}

  onLogin(form: any) {
    if (form.valid) {
      const { email, password } = form.value;

      this.authService.login(email, password).subscribe({
        next: (token: string) => {
          if(token!== 'fail'){
          localStorage.setItem('token', token); // optional: save token
          // alert(`Welcome, ${email}`);
          this.router.navigate(['/dashboard']); // navigate after login
          }else{
            alert('Login failed. Please check credentials.');
            form.resetForm();
          }
        },
        error: (err: any) => {
          console.error('Login error:', err);
          alert('Login failed. Please check credentials.');
        }
      });

    } else {
      alert('Please fill all fields correctly.');
    }
  }

  register() {
    this.router.navigate(['/register']);
  }
  
}
