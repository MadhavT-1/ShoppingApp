import { Injectable } from '@angular/core';
import { BehaviorSubject, interval, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  allUserList: string = '';
  myToken: string = 'MyToken';
  private isAuthenticated = false;
  private token: string = '';
  private timer: any;
  private authStatusListener = new Subject<boolean>();
  private userSubject = new BehaviorSubject(this.allUserList);
  currentUser = this.userSubject.asObservable();

  constructor() {}

  getIsAuthenticated() {
    return this.isAuthenticated;
  }

  addUser(user: string) {
    // this.allUserList = user;
    // this.userSubject.next(this.allUserList);
    return this.userSubject.next(user);
  }

  login(email: string, password: string) {
    if (email === 'test' && password === 'test') {
      this.isAuthenticated = true;
      this.authStatusListener.next(true);
      this.token = this.myToken;
      // this.setAuthTimer(5);
    }
  }

  setAuthTimer(duration: number) {
    console.log('setting timer for ' + duration + ' Minutes');
    this.timer = setTimeout(() => {
      this.logout();
    }, duration * 60 * 1000);
  }

  getToken() {
    return this.token;
  }

  autoAuthUser() {
    const authInfo = this.getAuthData();
    if (authInfo == '') return;
    this.token = authInfo;
    this.isAuthenticated = true;
    this.authStatusListener.next(true);
  }

  getAuthData() {
    const token = this.token;
    if (token == '') return;

    return token;
  }

  logout() {
    this.isAuthenticated = false;
    this.token = '';
    this.authStatusListener.next(false);
    clearTimeout(this.timer);
  }
}
