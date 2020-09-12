import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  private isLoggedIn;
  private uemail;

  constructor(private router: Router) { 
  }

  setUserLoggedIn(value: boolean) {
  	this.isLoggedIn = value;
  }

  getUserLoggedIn() {
  	return this.isLoggedIn;
  }

  currentUser() {
    return JSON.parse(localStorage.getItem('currentUser'));
  }

  logout() {
    return localStorage.clear();
  }

  
}
