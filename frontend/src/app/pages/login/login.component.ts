import { Token } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
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
  constructor(private snack:MatSnackBar, private login:LoginService, private router:Router) { }

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

        //login...
        this.login.loginUser(data.token);
        this.login.getCurrentUser().subscribe(
          (user:any)=>{
            this.login.setUser(user);
            console.log(user);

            //redirect ...ADMIN: admin-dashboard
            //redirect ...NORMAL: NORMAL-dashboard
            if(this.login.getUserRole()=="ADMIN") {
              //window.location.href='/admin';
              this.router.navigate(['admin']);
              this.login.loginStatusSubject.next(true);
            }
            else if(this.login.getUserRole()=='NORMAL') {
              //window.location.href='user-dashboard';
              this.router.navigate(['user-dashboard']);
              this.login.loginStatusSubject.next(true);
            }
            else {
              this.snack.open("Role Mismatch !! Try again", '',{
                duration: 3000,
              });
              this.login.logout();
            }
          }
        )

      },
      (error)=>{
        console.log("Error");
        console.log(error);
        this.snack.open("Invalid Details !! Try again", '',{
          duration: 3000,
        });
      }
    );
  }

}
