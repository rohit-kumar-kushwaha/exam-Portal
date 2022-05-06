import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { GroupService } from 'src/app/services/group.service';
import { LoginService } from 'src/app/services/login.service';

@Component({
  selector: 'app-join-group',
  templateUrl: './join-group.component.html',
  styleUrls: ['./join-group.component.css']
})
export class JoinGroupComponent implements OnInit {

  group = {
    secretKey: ''
  }

  user:any;

  constructor(private _group:GroupService, private _snack:MatSnackBar, private _login:LoginService, private _router:Router) { }

  ngOnInit(): void {

  }

  formSubmit() {

    if(this.group.secretKey.trim()=='' || this.group.secretKey.trim()==null) {
      this._snack.open("Secret Key is required !!", "",{
        duration:3000,
      });
      return;
    }
    this.user = this._login.getUser();
    console.log(this.group);
    this._group.joinGroup(this.group).subscribe(
      (data:any)=> {
        this.group.secretKey = '';
        console.log(this.group);
        window.location.href='/user-dashboard';
        this._snack.open("adding successfully...","",{
          duration:3000,
        });

      },
      (error)=>{
        this._snack.open("Server Error...","",{
          duration:3000,
        });
      }
    );
    
    
  }



}
