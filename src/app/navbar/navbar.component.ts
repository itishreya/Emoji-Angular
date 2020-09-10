import { Component, OnInit } from '@angular/core';

export type Action = 'Home' | 'Login';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {

  action: Action='Home'

  get showHome() {
    return this.action === 'Home';
  }

  get showLogin() {
    return this.action === 'Login';
  }


  toggleAction(type: Action) {
    this.action = type;
  }

  constructor() { }

  ngOnInit() {
    
  }
}