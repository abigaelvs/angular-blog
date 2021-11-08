import { HttpClientModule } from '@angular/common/http';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { PostService } from 'src/app/services/post/post.service';

import { AdminPostAllComponent } from './admin-post-all.component';

describe('AdminPostAllComponent', () => {
  let component: AdminPostAllComponent;
  let fixture: ComponentFixture<AdminPostAllComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdminPostAllComponent ],
      // imports: [ HttpClientModule ],
      // providers: [ PostService ] 
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminPostAllComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
