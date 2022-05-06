import { Message } from '@angular/compiler/src/i18n/i18n_ast';
import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { UserService } from 'src/app/services/user.service';
import Swal from 'sweetalert2'

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  constructor(private userService:UserService, private snack:MatSnackBar) { }

  public roles = [
    {
      role:'ADMIN'
    },
    {
      role: 'NORMAL'
    }
  ]

  public user={
    username: '',
    password: '',
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    role: '',
  };

  ngOnInit(): void {}

  formSubmit() {
    console.log(this.user);
    if(this.user.username=='' || this.user.username==null) {
      // alert('User is required !!');  
      this.snack.open("Username is required !!",'', {
        duration: 3000,
        
      });
      return;
    }

    // addUser userservice
    this.userService.addUser(this.user).subscribe(
      (data:any)=>{
        //success
        console.log(data);
        //alert('success');
        Swal.fire('Successfully done !!', 'User id is '+data.id, 'success');
      },
      (error)=>{
        //error
        console.log(error);
        // alert('somthing went wrong !!');
        this.snack.open("Somthing went wrong !!",'', {
          duration: 3000,
          
        });
      }
    )

  }

}
