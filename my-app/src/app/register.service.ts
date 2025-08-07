import { Injectable } from '@angular/core';
import { environment } from '../environments/environment.prod';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RegisterService {

 private base = environment.apiBaseUrl;
 private apiUrl = `${this.base}details/admins`

  constructor(private http: HttpClient) { }

  sendOtp(email: string): Observable<any> {
    const url = `${this.base}regotp?email=${encodeURIComponent(email)}`;
    return this.http.post(url, {});
  }

  verifyOtp(email: string, otp: string): Observable<any> {
    const url = `${this.base}verfiyotp?email=${encodeURIComponent(email)}&otp=${encodeURIComponent(otp)}`;
    return this.http.post(url, {});
  }

  registerUser(data: { username: string; email: string; password: string }): Observable<any> {
    const url = `${this.base}register`;
    return this.http.post(url, data);
  }
}
