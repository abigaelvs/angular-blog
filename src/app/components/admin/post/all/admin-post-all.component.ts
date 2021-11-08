import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { Post } from 'src/app/models/post';
import { PostService } from 'src/app/services/post/post.service';

@Component({
  selector: 'app-admin-post-all',
  templateUrl: './admin-post-all.component.html',
  styleUrls: ['./admin-post-all.component.css']
})
export class AdminPostAllComponent implements OnInit {

  posts: Post[] = []


  constructor(
    private postService: PostService
  ) { }

  ngOnInit(): void {
    this.getPosts();
  }

  getPosts() {
    this.postService.getAll().subscribe(
      posts => {
        this.posts = posts
      }
    )
  }

}
