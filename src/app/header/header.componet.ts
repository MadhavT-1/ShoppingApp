import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { UserService } from '../Services/user.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
})
export class HeaderComponent implements OnInit {
  isAuthenticated = false;

  constructor(private userService: UserService) {}
  ngOnInit() {
    this.isAuthenticated = this.userService.getIsAuthenticated();
  }
  logout() {
    this.userService.logout();
  }
}
