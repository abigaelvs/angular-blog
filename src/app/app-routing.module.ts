import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './components/about/about.component';
import { AdminComponent } from './components/admin/admin.component';
import { AdminPostAddComponent } from './components/admin/post/add/admin-post-add.component';
import { AdminPostAllComponent } from './components/admin/post/all/admin-post-all.component';
import { AdminPostDeleteComponent } from './components/admin/post/delete/admin-post-delete.component';
import { AdminPostUpdateComponent } from './components/admin/post/update/admin-post-update.component';
import { LoginComponent } from './components/auth/login/login.component';
import { PostsComponent } from './components/posts/all/posts.component';
import { PostDetailComponent } from './components/posts/detail/post-detail.component';
import { AuthGuard } from './guard/auth/auth.guard';
import { RoleGuard } from './guard/role/role.guard';


const routes: Routes = [
  {path: "", component: PostsComponent, canActivate: [AuthGuard]},
  {path: "posts/:id", component: PostDetailComponent, canActivate: [AuthGuard]},
  {path: "about", component: AboutComponent, canActivate: [AuthGuard, RoleGuard]},

  {path: "admin", component: AdminComponent, canActivate: [AuthGuard, RoleGuard]},
  {path: "admin/posts/all", component: AdminPostAllComponent, canActivate: [AuthGuard, RoleGuard]},
  {path: "admin/posts/add", component: AdminPostAddComponent, canActivate: [AuthGuard, RoleGuard]},
  {path: "admin/posts/:id", component: AdminPostUpdateComponent, canActivate: [AuthGuard, RoleGuard]},
  {path: "admin/posts/delete/:id", component: AdminPostDeleteComponent, canActivate: [AuthGuard, RoleGuard]},

  {path: "login", component: LoginComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
