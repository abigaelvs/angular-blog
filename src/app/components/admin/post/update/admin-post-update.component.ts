import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { PostBase, PostCategory } from 'src/app/models/post';
import { CategoryService } from 'src/app/services/post/category/category.service';
import { PostService } from 'src/app/services/post/post.service';

@Component({
  selector: 'app-admin-post-update',
  templateUrl: './admin-post-update.component.html',
  styleUrls: ['./admin-post-update.component.css']
})
export class AdminPostUpdateComponent implements OnInit {
  
  postId: number;
  categories: PostCategory[] = []
  selectedCategory: PostCategory;
  postForm = new FormGroup({
    title: new FormControl("", [Validators.required]),
    excerpt: new FormControl("", [Validators.required]),
    body: new FormControl("", [Validators.required]),
    postCategory: new FormControl([], [Validators.required])
  })
  submitted: boolean = false;

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private postService: PostService,
    private categoryService: CategoryService
  ) { }

  ngOnInit(): void {
    this.postId = Number(this.route.snapshot.paramMap.get("id"))
    this.getCategories()
    this.getPost()

  }

  getPost() {
    this.postService.getById(this.postId).subscribe(
      post => {
        this.postForm.get("title")?.setValue(post.title);
        this.postForm.get("excerpt")?.setValue(post.excerpt);
        this.postForm.get("body")?.setValue(post.body);
        this.postForm.get("postCategory")?.setValue(post.postCategory)
        this.selectedCategory = post.postCategory
      }
    )
  }

  getCategories() {
    this.categoryService.getAll().subscribe(
      result => {
        this.categories = result;
      }
    )
  }

  onSubmit(post: PostBase) {
    this.submitted = true;
    this.postService.put(post, this.postId).subscribe(
      result => this.router.navigateByUrl("/admin/posts/all")
    )
  }

}
