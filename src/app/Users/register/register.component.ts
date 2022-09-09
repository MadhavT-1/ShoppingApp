import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { UserService } from 'src/app/Services/user.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css'],
})
export class RegisterComponent implements OnInit {
  registerForm: FormGroup;
  submitted = false;
  userName: string;
  isAuthenticated: boolean;

  constructor(
    private formBuilder: FormBuilder,
    private userSerivce: UserService,
    private router: Router
  ) {
    this.registerForm = this.formBuilder.group({
      firstName: ['test', Validators.required],
    });
  }

  ngOnInit(): void {
    this.isAuthenticated = this.userSerivce.getIsAuthenticated();
    console.log('====================================');
    console.log('user is authenticated: ' + this.isAuthenticated);
    console.log('====================================');
  }

  onSubmit() {
    // this.userName = this.registerForm.value.firstName;
    this.userName = this.registerForm.get('firstName').value;
    console.log('====================================');
    console.log(this.userName);
    console.log('====================================');

    this.userSerivce.addUser(this.userName);

    this.router.navigate(['/login']);
  }

  onReset() {}

  // convenience getter for easy access to form fields
  get f() {
    return this.registerForm.controls;
  }
}
