import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { RegisterService } from '../../register.service';

@Component({
  selector: 'app-register',
  imports: [CommonModule, FormsModule, ReactiveFormsModule],
  templateUrl: './register.component.html',
  styleUrl: './register.component.scss'
})
export class RegisterComponent {

  registerForm: FormGroup;
  otpSent: boolean = false;
  otpVerified: boolean = false;
  serverOtp: string = ''; // Store OTP from server (for mock/demo)
  errorMsg: string = '';
  successMsg: string = '';

  constructor(private fb: FormBuilder, private http: HttpClient, private router: Router, private registerService: RegisterService) {
    this.registerForm = this.fb.group({
      username: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      password: ['', Validators.required],
      otp: ['']
    });
  }

  sendOtp() {
    const email = this.registerForm.get('email')?.value;
    this.registerService.sendOtp(email).subscribe({
      next: (res) => {
        this.otpSent = true;
        this.serverOtp = res.otp; // For demo/testing only
        this.errorMsg = '';
      },
      error: () => {
        this.errorMsg = 'Failed to send OTP';
      }
    });
  }



  verifyOtp() {
    const email = this.registerForm.get('email')?.value;
    const enteredOtp = this.registerForm.get('otp')?.value;

    this.registerService.verifyOtp(email, enteredOtp).subscribe({
      next: () => {
        this.otpVerified = true;
        this.successMsg = 'OTP Verified Successfully';
        this.errorMsg = '';
      },
      error: (err) => {
        if (err.status === 400) {
          this.errorMsg = 'Invalid or expired OTP';
        } else {
          this.errorMsg = 'OTP verification failed';
        }
      }
    });
  }


  register() {
    if (!this.otpVerified) return;

    const { username, email, password } = this.registerForm.value;

    this.registerService.registerUser({ username, email, password }).subscribe({
      next: () => {
        this.successMsg = 'Registered successfully';
        this.router.navigate(['/login']);
      },
      error: () => {
        this.errorMsg = 'Registration failed';
      }
    });
  }

  goToLogin() {
    this.router.navigate(['/login']);
  }
}