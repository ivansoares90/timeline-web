import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';

import { UserService } from '../../services/user.service';
@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']

})
export class RegisterComponent implements OnInit {

  constructor(
    private formBuilder: FormBuilder,
    private router: Router,
    private userService: UserService,
    private toastr: ToastrService
  ) { }
  registerForm: FormGroup;
  loading = false;
  submitted = false;

  ngOnInit() {
    this.registerForm = this.formBuilder.group({
      username: ['', Validators.required],
      password: ['', Validators.required]
    });
  }

  get fval() { return this.registerForm.controls; }

  onFormSubmit() {
    this.submitted = true;

    if (this.registerForm.invalid) {
      return;
    }
    
    this.loading = true;
    this.userService.register(this.registerForm.value).subscribe(
      (data) => {
        alert('User Registered successfully!');
        this.router.navigate(['/login']);
      },
      (error) => {

        this.toastr.error(error.error.message, 'Error');
        this.loading = false;
      }
    )
  }
}