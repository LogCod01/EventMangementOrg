import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private isLoggedIn: boolean = false;

  constructor() { }

  getLoginStatus(): boolean {
    return this.isLoggedIn;
  }

  setLoginStatus(status: boolean) {
    this.isLoggedIn = status;
  }
}
