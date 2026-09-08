import { AfterViewInit, Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-logout',
  templateUrl: './logout.component.html',
  styleUrls: ['./logout.component.css']
})
export class LogoutComponent implements OnInit, AfterViewInit{

  constructor(
    private router: Router,
    private auth: AuthService) { 

    }
    
    ngOnInit(): void {
    alert("Você será deslogado do sistema!");
    this.auth.doLogOut();
  }

  ngAfterViewInit(): void {}

}
