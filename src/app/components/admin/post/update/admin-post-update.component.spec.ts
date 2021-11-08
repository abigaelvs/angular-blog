import { HttpClientModule } from '@angular/common/http';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { CategoryService } from 'src/app/services/post/category/category.service';
import { PostService } from 'src/app/services/post/post.service';

import { AdminPostUpdateComponent } from './admin-post-update.component';

describe('AdminPostUpdateComponent', () => {
  let component: AdminPostUpdateComponent;
  let fixture: ComponentFixture<AdminPostUpdateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdminPostUpdateComponent ],
      // imports: [ RouterTestingModule, HttpClientModule ],
      // providers: [ PostService, CategoryService ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminPostUpdateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
