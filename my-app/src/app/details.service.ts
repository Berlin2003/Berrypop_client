import { Inject, Injectable ,PLATFORM_ID } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { LoaderService } from './loader.service';  // Import LoaderService
import { catchError, finalize } from 'rxjs/operators';
import { isPlatformBrowser } from '@angular/common';
import { environment } from '../environments/environment.prod';


@Injectable({
  providedIn: 'root'
})
export class DetailsService {

   private base = environment.apiBaseUrl;
  private apiUrl = `${this.base}details/admins` // Your backend API URL

  constructor(private http: HttpClient, private loaderService: LoaderService, @Inject(PLATFORM_ID) private platformId: Object) {}

  // Create a new detail (message)
  createDetail(detail: any): Observable<any> {
    this.loaderService.show(); // Show loader when starting request

    return this.http.post<any>(this.apiUrl, detail).pipe(
      finalize(() => this.loaderService.hide()) // Hide loader after request completes
    );
  }

  // Send OTP to the provided email
  sendOtp(email: string): Observable<any> {
    this.loaderService.show(); // Show loader when starting request

    return this.http.post(`${this.apiUrl}/send-otp?email=${encodeURIComponent(email)}`, {}).pipe(
      finalize(() => this.loaderService.hide()) // Hide loader after request completes
    );
  }

  // Verify OTP method in service
  verifyOtp(email: string, otp: string): Observable<any> {
    this.loaderService.show(); // Show loader when starting request

    return this.http.post(`${this.apiUrl}/verify-otp?email=${encodeURIComponent(email)}&otp=${encodeURIComponent(otp)}`, {}).pipe(
      finalize(() => this.loaderService.hide()) // Hide loader after request completes
    );
  }

  getDetails(): Observable<any> {
     if (!isPlatformBrowser(this.platformId)) {
    // Return an empty observable if called on server
    return new Observable(observer => {
      observer.complete();
    });
  }

  const token = localStorage.getItem('token');
  console.log("token---->", token);
    const headers = new HttpHeaders().set('Authorization', `Bearer ${token}`);

    this.loaderService.show(); // Show loader

    return this.http.get<any>(this.apiUrl, { headers }).pipe(
      finalize(() => this.loaderService.hide())
    );
  }
  // In details.service.ts
updateDetails(id: number, status: string, payment: string): Observable<any> {
  const token = localStorage.getItem('token'); // Authorization token
  const headers = new HttpHeaders().set('Authorization', `Bearer ${token}`);
  const url = `${this.apiUrl}/change?id=${encodeURIComponent(id)}&status=${encodeURIComponent(status)}&payment=${encodeURIComponent(payment)}`;
  this.loaderService.show(); // Show loader
  return this.http.post<any>(url, {}, { headers }).pipe(
    finalize(() => this.loaderService.hide())
  );
}

deleteDetails(id: number): Observable<void> {
  const token = localStorage.getItem('token'); // Authorization token
  const headers = new HttpHeaders().set('Authorization', `Bearer ${token}`);
  const url = `${this.apiUrl}/${id}`; // DELETE endpoint: details/admins/{id}

  this.loaderService.show(); // Show loader

  return this.http.delete<void>(url, { headers }).pipe(
    finalize(() => this.loaderService.hide()) // Hide loader after request
  );
}


}




