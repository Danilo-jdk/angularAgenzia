import { Injectable } from '@angular/core';
import { Subject, ReplaySubject, Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  apiBaseUrl = "api/users";

  datiUtente = new ReplaySubject();

  constructor(private http: HttpClient) { }

  insertUser(form: any): Observable<any>{
   return this.http.post<any>(`${this.apiBaseUrl}/signup`, form);
  }

  getUser(email: string): Observable<string>{
    const user = {
      email: email
    }
    return this.http.post<any>(`${this.apiBaseUrl}/user`, user);
  }
}
