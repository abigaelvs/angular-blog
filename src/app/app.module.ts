import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { NgxWebstorageModule } from 'ngx-webstorage';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AboutComponent } from './components/about/about.component';
import { AdminComponent } from './components/admin/admin.component';
import { AdminPostAddComponent } from './components/admin/post/add/admin-post-add.component';
import { AdminPostAllComponent } from './components/admin/post/all/admin-post-all.component';
import { AdminPostDeleteComponent } from './components/admin/post/delete/admin-post-delete.component';
import { AdminPostUpdateComponent } from './components/admin/post/update/admin-post-update.component';
import { LoginComponent } from './components/auth/login/login.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { PostsComponent } from './components/posts/all/posts.component';
import { PostDetailComponent } from './components/posts/detail/post-detail.component';


@NgModule({
  declarations: [
    AppComponent,
    PostsComponent,
    NavbarComponent,
    PostDetailComponent,
    LoginComponent,
    AdminComponent,
    AboutComponent,
    AdminPostAllComponent,
    AdminPostUpdateComponent,
    AdminPostDeleteComponent,
    AdminPostAddComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    NgxWebstorageModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
