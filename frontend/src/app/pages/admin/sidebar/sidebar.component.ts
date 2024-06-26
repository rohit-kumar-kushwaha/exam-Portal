import { Component, OnInit } from '@angular/core';
import { LoginService } from 'src/app/services/login.service';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {

  isLoggedIn = false;
  user = null;

  constructor(public _login:LoginService) { 
    this.isLoggedIn = this._login.isLoggedIn();
    this.user = this._login.getUser();
    
    this._login.loginStatusSubject.asObservable().subscribe((data)=>{
      this.isLoggedIn = this._login.isLoggedIn();
      this.user = this._login.getUser();
    })
    
  }

  ngOnInit(): void {
  }

  public logout() {
    this._login.logout();
    localStorage.clear();
    window.location.reload();
  }

}
