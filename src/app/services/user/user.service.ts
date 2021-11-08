import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { LocalStorageService } from 'ngx-webstorage';
import { Observable } from 'rxjs';
import { User } from 'src/app/models/user';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  apiUrl: string = "http://localhost:8080/api/users";
  httpOptions = {
    headers: new HttpHeaders({
      "Content-Type": "application/json",
      "Authorization": 
      "Bearer eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJhZG1pbiIsImV4cCI6MTYzNjExNjI1MiwiaWF0IjoxNjM2MDgwMjUyfQ.b8wpPEfT7STikTkL4cQfzJnm7YYniT4pElPF9QqfQP8"
    })
  }

  constructor(
    private http: HttpClient,
    private localStorage: LocalStorageService
  ) { }

  getAll(): Observable<User[]> {
    return this.http.get<User[]>(this.apiUrl, this.httpOptions);
  }

  getByUsername(username: string): Observable<User> {
    const url: string = `${this.apiUrl}/by-username/${username}`;
    return this.http.get<User>(url, this.httpOptions);
  }

  getLocalUsername() {
    return this.localStorage.retrieve("username");
  }

  isLoggedIn(): boolean {
    return this.getLocalUsername() != null && this.getLocalUsername() != undefined;
  }
}
