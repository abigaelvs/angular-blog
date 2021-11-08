import { HttpClientModule } from '@angular/common/http';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { PostService } from 'src/app/services/post/post.service';

import { AdminPostDeleteComponent } from './admin-post-delete.component';

describe('AdminPostDeleteComponent', () => {
  let component: AdminPostDeleteComponent;
  let fixture: ComponentFixture<AdminPostDeleteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdminPostDeleteComponent ],
      // imports: [ RouterTestingModule, HttpClientModule ],
      // providers: [ PostService ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminPostDeleteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
