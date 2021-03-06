import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';

import { AuthenticationService } from '../../services/authentication.service';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']

})
export class LoginComponent implements OnInit {

  constructor(
    private formBuilder: FormBuilder,
    private router: Router,
    private authenticationService: AuthenticationService,
    private toastr: ToastrService
  ) { }
  loginForm: FormGroup;
  loading = false;
  submitted = false;

  ngOnInit() {
    this.loginForm = this.formBuilder.group({
      username: ['', Validators.required],
      password: ['', Validators.required]
    });
  }

  get fval() { return this.loginForm.controls; }

  onFormSubmit() {
    this.submitted = true;

    if (this.loginForm.invalid) {
      return;
    }

    this.loading = true;
    this.authenticationService.login(this.fval.username.value, this.fval.password.value).subscribe(
      (data) => {
        this.router.navigate(['/timeline']);
      },
      (error) => {
        this.toastr.error(error.error.message, 'Error');
        this.loading = false;
      }
    )

  }

}