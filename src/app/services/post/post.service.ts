import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Post, PostBase, PostCategory } from 'src/app/models/post';
import { AuthService } from '../auth/auth.service';

@Injectable({
  providedIn: 'root'
})
export class PostService {

  apiUrl: string = "http://localhost:8080/api/posts";
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

  getAll(): Observable<Post[]> {
    return this.http.get<Post[]>(this.apiUrl, this.httpOptions);
  }

  getById(id: number): Observable<Post> {
    const url: string = `${this.apiUrl}/${id}`;
    return this.http.get<Post>(url, this.httpOptions)
  }

  post(post: PostBase): Observable<Post> {
    return this.http.post<Post>(this.apiUrl, post, this.httpOptions);
  }

  put(post: PostBase, postId: number): Observable<Post> {
    const url = `${this.apiUrl}/${postId}`;
    return this.http.put<Post>(url, post, this.httpOptions);
  }

  delete(id: number) {
    const url = `${this.apiUrl}/${id}`;
    return this.http.delete(url, this.httpOptions)
  }
}
