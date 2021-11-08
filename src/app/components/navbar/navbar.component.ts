import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth/auth.service';
import { PermissionService } from 'src/app/services/user/permission/permission.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  isLoggedIn: boolean;
  username: string;
  permissions: string[] = [];

  constructor(
    private router: Router,
    private authService: AuthService,
    public permissionService: PermissionService
  ) { }

  ngOnInit(): void {
    this.authService.loggedIn.subscribe((data: boolean) => this.isLoggedIn = data);
    this.authService.username.subscribe((data: string) => this.username = data);

    this.isLoggedIn = this.authService.isLoggedIn();
    this.username = this.authService.getLocalUsername();
    if (this.isLoggedIn) {
      this.getPermissions()
    }
  }

  logout() {
    this.authService.logout();
    this.router.navigateByUrl("/login")
  }

  getPermissions() {
    this.permissionService.getByUsername(this.username).toPromise().then(
      (result) => {
        result.forEach(p => this.permissions.push(p.name.toString()))
      }
    );
  }

  moduleAllowed(menu: string) {
    if (this.permissions.indexOf(menu) === -1) {
      return false;
    } 
    return true;
  }

}
