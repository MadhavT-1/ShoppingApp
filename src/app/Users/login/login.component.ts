import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from 'src/app/Services/user.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  userName: string;
  constructor(private userService: UserService, private router: Router) {}

  ngOnInit(): void {
    this.userService.currentUser.subscribe((user) => (this.userName = user));
  }

  login() {
    this.userService.login('test', 'test');
    this.router.navigate(['/register']);
  }
}
