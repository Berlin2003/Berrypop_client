import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { LoaderService } from './loader.service';
import { catchError, finalize, Observable, throwError } from 'rxjs';
import { environment } from '../environments/environment.prod';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private base = environment.apiBaseUrl;
  private apiUrl = `${this.base}login`

  constructor(private http: HttpClient, private loaderService: LoaderService) {}

  login(username: string, password: string): Observable<string> {
    this.loaderService.show();

    return this.http.post(this.apiUrl, { username, password }, { responseType: 'text' }).pipe(
      finalize(() => this.loaderService.hide()),
      catchError(error => {
        console.error('Login failed:', error);
        return throwError(() => error);
      })
    );
  }
}
