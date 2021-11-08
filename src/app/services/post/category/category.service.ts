import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { PostCategory } from 'src/app/models/post';
import { AuthService } from '../../auth/auth.service';

@Injectable({
  providedIn: 'root'
})
export class CategoryService {

  apiUrl: string = "http://localhost:8080/api/posts/categories";
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

  getAll(): Observable<PostCategory[]> {
    return this.http.get<PostCategory[]>(this.apiUrl, this.httpOptions)
  }
}
