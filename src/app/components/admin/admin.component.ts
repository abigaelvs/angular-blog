import { Component, OnInit } from '@angular/core';
import { Permission } from 'src/app/models/user';
import { AuthService } from 'src/app/services/auth/auth.service';
import { PermissionService } from 'src/app/services/user/permission/permission.service';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {

  isLoggedIn: boolean;
  username: string;
  permissions: string[] = [];

  constructor(
    private authService: AuthService,
    private permissionService: PermissionService
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
