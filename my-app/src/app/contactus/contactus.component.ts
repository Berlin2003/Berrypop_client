import { Component, OnInit } from '@angular/core';
import { HeaderComponent } from "../header/header.component";
import { FormsModule } from '@angular/forms';
import { DetailsService } from '../details.service';
import { CommonModule } from '@angular/common';


@Component({
  selector: 'app-contactus',
  imports: [HeaderComponent, FormsModule,CommonModule],
  templateUrl: './contactus.component.html',
  styleUrl: './contactus.component.scss'
})
export class ContactusComponent {
  contactData = { name: '', email: '', message: '' };
  otp: string = '';
  otpSent: boolean = false;
  otpVerified: boolean = false;
  otpsendsuccessMessage: string | null = null;
  otpverifysuccessMessage: string | null = null;
  optsenderrorMessage: string | null = null;
  optverifyerrorMessage: string | null = null;
  successMessage: string | null = null;
  errorMessage: string|null=null;

  constructor(private detailsService: DetailsService) {}

  // Send OTP to user's email
sendOtp(): void {
  if (this.contactData.email) {
    this.detailsService.sendOtp(this.contactData.email).subscribe({
      next: () => {
        this.otpSent = true;
        this.otpsendsuccessMessage = 'OTP sent to your email. Please check and verify.';
        this.optsenderrorMessage = null;

        // Auto-clear success message after 10 seconds
        setTimeout(() => {
          this.otpsendsuccessMessage = null;
        }, 3000);
      },
      error: () => {
        this.optsenderrorMessage = 'Failed to send OTP. Please try again.';

        // Auto-clear error message after 10 seconds
        setTimeout(() => {
          this.optsenderrorMessage = null;
        }, 3000);
      }
    });
  } else {
    this.optsenderrorMessage = 'Email is required to send OTP.';

    // Auto-clear error message after 10 seconds
    setTimeout(() => {
      this.optsenderrorMessage = null;
    }, 3000);
  }
}


  // Verify OTP
verifyOtp(): void {
  if (this.contactData.email && this.otp) {
    this.detailsService.verifyOtp(this.contactData.email, this.otp).subscribe({
      next: () => {
        this.otpverifysuccessMessage = 'OTP verified successfully!';
        this.otpVerified = true;
        this.optverifyerrorMessage = null;

        // Auto-clear success message after 10 seconds
        setTimeout(() => {
          this.otpverifysuccessMessage = null;
        }, 3000);
      },
      error: (error) => {
        this.otpverifysuccessMessage = null;
        this.optverifyerrorMessage = error.error?.message || 'Invalid or expired OTP. Please try again.';

        // Auto-clear error message after 10 seconds
        setTimeout(() => {
          this.optverifyerrorMessage = null;
        }, 3000);
      }
    });
  } else {
    this.optverifyerrorMessage = 'Please enter the OTP and email.';

    // Auto-clear error message after 10 seconds
    setTimeout(() => {
      this.optverifyerrorMessage = null;
    }, 3000);
  }
}


  // Resend OTP
  resendOtp(): void {
    this.otp = ''; // Clear previous OTP input
    this.otpSent = false;
    this.sendOtp();
  }

  
  submitForm(): void {
    if (this.contactData.name && this.contactData.message && this.otpVerified) {
      this.detailsService.createDetail(this.contactData).subscribe({
        next: () => {
          this.successMessage = 'Your message has been sent successfully!';
          this.errorMessage = null;
  
          // Clear the form fields
          this.contactData = { name: '', email: '', message: '' };
          this.otp = '';
          this.otpSent = false;
          this.otpVerified = false;
  
          // Auto-clear message after 10 seconds
          setTimeout(() => {
            this.successMessage = null;
          }, 3000);
        },
        error: () => {
          this.errorMessage = 'Error sending message. Please try again.';
  
          // Auto-clear error message after 10 seconds
          setTimeout(() => {
            this.errorMessage = null;
          }, 3000);
        }
      });
    } else {
      this.errorMessage = 'Please fill in all required fields and verify OTP.';
  
      // Auto-clear error message after 10 seconds
      setTimeout(() => {
        this.errorMessage = null;
      }, 3000);
    }
  }
  
  
}