import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { AuthService } from 'src/app/services/auth/auth.service';
import { LoginRequest } from 'src/app/models/login';
import { Router } from '@angular/router';
import { HttpHeaders } from '@angular/common/http';
import { LocalStorageService } from 'ngx-webstorage';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  loginForm = new FormGroup({
    username: new FormControl("", [Validators.required]),
    password: new FormControl("", [Validators.required])
  })
  submitted: boolean = false;

  constructor(
    private router: Router,
    private authService: AuthService,
  ) { }

  ngOnInit(): void {
  }

  onSubmit(loginRequest: LoginRequest) {
    this.submitted = true;
    this.authService.login(loginRequest).subscribe(
      result => {
        this.router.navigate(["/"]);
      }
    )
  }

}