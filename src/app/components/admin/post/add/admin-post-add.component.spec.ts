import { HttpClientModule } from '@angular/common/http';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ReactiveFormsModule } from '@angular/forms';
import { RouterTestingModule } from '@angular/router/testing';
import { CategoryService } from 'src/app/services/post/category/category.service';
import { PostService } from 'src/app/services/post/post.service';

import { AdminPostAddComponent } from './admin-post-add.component';

describe('AdminPostAddComponent', () => {
  let component: AdminPostAddComponent;
  let fixture: ComponentFixture<AdminPostAddComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdminPostAddComponent ],
      // imports: [ RouterTestingModule, HttpClientModule, ReactiveFormsModule ],
      // providers: [ PostService, CategoryService ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminPostAddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
