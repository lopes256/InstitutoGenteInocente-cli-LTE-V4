import { AfterViewInit, Component, inject, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  loginUsuario!: string;
  password!: string;
  rememberMe: boolean = false;
  todayNumber: number = Date.now();
  todayDate: Date = new Date();
  tokenExp!: Date;
  // tokenDecode: IToken = <IToken>{};

  ngOnInit(): void {

  }

  ngAfterViewInit(): void {
    
  }

  onSubmitLogin() {
    // Implement your login logic here
    console.clear();
    console.log('Login form submitted');
    console.log('Email:', this.loginUsuario);
    console.log('Password:', this.password);
    console.log('Remember Me:', this.rememberMe);
  }
}
