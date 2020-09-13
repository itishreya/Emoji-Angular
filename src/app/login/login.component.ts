import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { UserService } from '../user.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  
  loginForm: FormGroup;
  private formSubmitAttempt: boolean;
  emailPattern = "^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$";
  uemail:string;
  upass: string; 

  constructor(private fb: FormBuilder, private router: Router, private user: UserService) { }

  ngOnInit(): void {
    this.loginForm = this.fb.group({

  		email: ['', [Validators.required, Validators.pattern(this.emailPattern)]],
  		pass: ['', [Validators.required]]
  	});
  }

  isFieldInvalid(field: string) {
    return (
      (!this.loginForm.get(field).valid && this.loginForm.get(field).touched) ||
      (this.loginForm.get(field).untouched && this.formSubmitAttempt)
    );
  }

  onSubmit(e) {
    e.preventDefault();
    this.uemail=e.target.elements[0].value;
    this.upass=e.target.elements[1].value;

    if(this.uemail=="iam@abc.com" && this.upass=="abceds"){
      localStorage.setItem('currentUser', JSON.stringify({token:'edstoken', name:this.uemail}));
      this.user.setUserLoggedIn(true);
      this.router.navigate(['/employees']);
    }
  }
  
}
