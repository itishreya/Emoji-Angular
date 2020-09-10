import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  private isLoggedIn;
  private uemail;

  constructor(private router: Router) { 
  	this.isLoggedIn = false;
    this.router.navigate(['/']);
  }

  setUserLoggedIn() {
  	this.isLoggedIn = true;
  }

  getUserLoggedIn() {
  	return this.isLoggedIn;
  }

  
}
