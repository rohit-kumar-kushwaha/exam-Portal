import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { LoginService } from 'src/app/services/login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  loginData={
    username: '',
    password: ''
  };
  constructor(private snack:MatSnackBar, private login:LoginService) { }

  ngOnInit(): void {
  }

  formSubmit() {
    console.log('login data submit');

    if(this.loginData.username.trim()=='' || this.loginData.username==null) {
      this.snack.open("Username is required !! ", "", {
        duration: 3000,
      });
      return;
    }

    if(this.loginData.password.trim()=='' || this.loginData.password==null) {
      this.snack.open("Password is required !! ", "", {
        duration: 3000,
      });
      return;
    }

    // return to serve to generated token
    this.login.generateToken(this.loginData).subscribe(
      (data:any)=>{
        console.log("success");
        console.log(data);
      },
      (error)=>{
        console.log("Error");
        console.log(error);
      }
    );
  }

}
