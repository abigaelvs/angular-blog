import { Component, OnInit } from '@angular/core';
import { Post } from 'src/app/models/post';
import { Permission } from 'src/app/models/user';
import { PostService } from 'src/app/services/post/post.service';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.css']
})
export class PostsComponent implements OnInit {

  posts: Post[] = [];

  constructor(private postService: PostService) { }

  ngOnInit(): void {
    this.getAllPost()
  }

  getAllPost() {
    this.postService.getAll().subscribe(
      posts => {
        this.posts = posts;
      }
    )
  }

}
