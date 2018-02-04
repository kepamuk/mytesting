import {Injectable} from '@angular/core';

@Injectable()
export class LoginService {

  isAuthorized = false;

  constructor() {
  }

  login() {
    this.isAuthorized = true;
  }

  logout() {
    localStorage.clear();
    this.isAuthorized = false;
  }

  getAuthorized(): boolean {
    return this.isAuthorized;
  }
}
