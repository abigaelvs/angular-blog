import { HttpClient, HttpHeaders } from '@angular/common/http';
import { EventEmitter, Injectable, Output } from '@angular/core';
import { LocalStorageService } from 'ngx-webstorage';
import { Observable } from 'rxjs';
import { AuthResponse } from 'src/app/models/auth';
import { LoginRequest } from 'src/app/models/login';

import { tap } from 'rxjs/operators';


@Injectable({
  providedIn: 'root'
})
export class AuthService {

  apiUrl: string = "http://localhost:8080/api/authenticate";
  httpOptions = {
    headers: new HttpHeaders({
      "Content-Type": "application/json",
    })
  }

  @Output() loggedIn: EventEmitter<boolean> = new EventEmitter();
  @Output() username: EventEmitter<string> = new EventEmitter();
  @Output() permissions: EventEmitter<string[]> = new EventEmitter();

  constructor(
    private http: HttpClient,
    private localStorage: LocalStorageService,
  ) { }

  // TODO: create signup endpoint

  login(loginRequest: LoginRequest): Observable<AuthResponse> {
    return this.http.post<AuthResponse>(this.apiUrl, loginRequest)
                    .pipe(
                      tap(
                        data => {
                          this.localStorage.store("authenticationToken", data.jwt);
                          this.localStorage.store("username", data.username);
                          this.loggedIn.emit(true);
                          this.username.emit(data.username);

                          const allPermission: string[] = []
                          data.permissions.forEach(p => {
                            allPermission.push(p.name.toString())
                          })
                          this.permissions.emit(allPermission);
                          // GlobalConstants.permissions = allPermission;
                        }
                      )
                    )
  }

  logout() {
    this.localStorage.clear("authenticationToken");
    this.localStorage.clear("username");
    this.loggedIn.emit(false);
    this.username.emit("Blog")
  }

  getJwtToken() {
    return this.localStorage.retrieve("authenticationToken");
  }

  getLocalUsername(): string {
    return this.localStorage.retrieve("username");
  }

  getPermissions() {
    return this.permissions;
  }

  isLoggedIn(): boolean {
    return this.getJwtToken() != null;
  }
}
