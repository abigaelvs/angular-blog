import { HttpClient, HttpHeaders } from '@angular/common/http';
import { EventEmitter, Injectable, Input } from '@angular/core';
import { LocalStorageService } from 'ngx-webstorage';
import { Observable } from 'rxjs';
import { Permission } from 'src/app/models/user';
import { AuthService } from '../../auth/auth.service';
import { UserService } from '../user.service';

@Injectable({
  providedIn: 'root'
})
export class PermissionService {

  apiUrl: string = "http://localhost:8080/api/permissions";
  httpOptions = {
    headers: new HttpHeaders({
      "Content-Type": "application/json",
      "Authorization": `Bearer ${this.authService.getJwtToken()}`
    })
  }

  constructor(
    private http: HttpClient,
    private authService: AuthService
  ) { }

  getByUsername(username: string): Observable<Permission[]> {
    const url: string = `${this.apiUrl}/roles/username/${username}`;
    return this.http.get<Permission[]>(url, this.httpOptions)
  }

  convertToArray(permissions: Permission[]) {
    const result: string[] = [];
    permissions.forEach(p => result.push(p.name.toString()));
    return result;
  }

  isAllowed() {
    const username = this.authService.getLocalUsername();
    
    const permissions: string[] = []
    this.getByUsername(username).toPromise().then(
      result => {
        result.forEach(p => permissions.push(p.name.toString()))
      }
    )

    return permissions;
  }
}
