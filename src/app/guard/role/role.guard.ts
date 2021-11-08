import { Location } from '@angular/common';
import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable, forkJoin } from 'rxjs';
import { map } from 'rxjs/operators';
import { Permission } from 'src/app/models/user';
import { AlertService } from 'src/app/services/alert/alert.service';
import { PermissionService } from 'src/app/services/user/permission/permission.service';
import { UserService } from 'src/app/services/user/user.service';

@Injectable({
  providedIn: 'root'
})
export class RoleGuard implements CanActivate {

  constructor(
    private userService: UserService,
    private alertService: AlertService,
    private permissionService: PermissionService,
  ) {}

  // Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree
  // Promise<boolean | UrlTree | Observable<boolean | UrlTree>>
  async canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Promise<boolean> {

    
    
    const username: string = this.userService.getLocalUsername();
    const permissions: String[] = [];
    const component: string = String(route.routeConfig?.component?.name);

    await this.permissionService.getByUsername(username).toPromise().then(
      result => {
        result.forEach((p) => {
          permissions.push(p.name.toString())
        })
      }
    );

    if (permissions.indexOf(component) === -1) {
      this.alertService.error("No Access", "You have no access to this page");
      return false;
    }

    return true;
  }
  
}
