import { Location } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PostService } from 'src/app/services/post/post.service';

@Component({
  selector: 'app-admin-post-delete',
  templateUrl: './admin-post-delete.component.html',
  styleUrls: ['./admin-post-delete.component.css']
})
export class AdminPostDeleteComponent implements OnInit {

  constructor(
    private location: Location,
    private route: ActivatedRoute,
    private postService: PostService
  ) { }

  ngOnInit(): void {
    this.getPost()
  }

  getPost() {
    const id: number = Number(this.route.snapshot.paramMap.get("id"))
    this.postService.delete(id).subscribe(
      result => this.location.back()
    );
  }

}
