import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { PostBase, PostCategory } from 'src/app/models/post';
import { CategoryService } from 'src/app/services/post/category/category.service';
import { PostService } from 'src/app/services/post/post.service';

@Component({
  selector: 'app-admin-post-add',
  templateUrl: './admin-post-add.component.html',
  styleUrls: ['./admin-post-add.component.css']
})
export class AdminPostAddComponent implements OnInit {

  categories: PostCategory[] = []
  postForm = new FormGroup({
    title: new FormControl("", [Validators.required]),
    excerpt: new FormControl("", [Validators.required]),
    body: new FormControl("", [Validators.required]),
    postCategory: new FormControl([], [Validators.required])
  })
  submitted: boolean = false;

  constructor(
    private router: Router,
    private postService: PostService,
    private categoryService: CategoryService
  ) { }

  ngOnInit(): void {
    this.getAllCategory()
  }

  onSubmit(post: PostBase) {
    this.submitted = true;
    const category = this.categories.filter( element => element.id == Number(post.postCategory) );
    post.postCategory = category[0]
    this.postService.post(post).subscribe(
      result => this.router.navigateByUrl("/admin/posts/all")
    )
  }

  getAllCategory() {
    this.categoryService.getAll().subscribe(
      result => {
        this.postForm.get("postCategory")?.setValue(result);
        this.categories = result;
        console.log(this.categories);
      }
    )
  }


}
