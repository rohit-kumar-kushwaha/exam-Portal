import { Component, OnInit } from '@angular/core';
import { LoginService } from 'src/app/services/login.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  isLoggedIn = false;
  user = null;

  constructor(public login:LoginService) { 
    this.isLoggedIn = this.login.isLoggedIn();
    this.user = this.login.getUser();
    this.login.loginStatusSubject.asObservable().subscribe((data)=>{
      this.isLoggedIn = this.login.isLoggedIn();
      this.user = this.login.getUser();
    })
    
  }

  ngOnInit(): void {
  }

  public logout() {
    this.login.logout();
    localStorage.clear();
    window.location.reload();
  }

}
