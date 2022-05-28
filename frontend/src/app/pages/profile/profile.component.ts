import { NgPlural } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { LoginService } from 'src/app/services/login.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  public user:any;

  constructor(public _login:LoginService) { }

  ngOnInit(): void {

    // this.user = this.login.getCurrentUser();
    this._login.getCurrentUser().subscribe(
      (user:any)=>{
        this.user = user;
        console.log(user);
      },
      (error)=>{
        console.log(error);
      }
    )
  }

}
