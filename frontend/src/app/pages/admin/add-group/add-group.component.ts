import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { GroupService } from 'src/app/services/group.service';
import { LoginService } from 'src/app/services/login.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-add-group',
  templateUrl: './add-group.component.html',
  styleUrls: ['./add-group.component.css']
})
export class AddGroupComponent implements OnInit {

  group = {
    groupId: '',
    groupName: '',
    description: '',
    createdBy: ''

  }

  constructor(private _snack:MatSnackBar, private _group:GroupService, private _login:LoginService) { }

  ngOnInit(): void {
  }

  formSubmit() {

    if(this.group.groupName.trim()=='' || this.group.groupName==null) {
      this._snack.open("Title Required !!","",{
        duration: 3000
      });
      return;
    }
    this.group.createdBy = this._login.getUser().firstName +" "+ this._login.getUser().lastName;
    this._group.addGroup(this.group).subscribe(
      (data:any)=>{
        this.group.groupName = '';
        this.group.description = '';
        console.log(data);
        Swal.fire('Success !!', 'Group secret key is '+data.secretKey+''+data.groupId, 'success')
      },
      (error)=>{
        this.group.groupName = '';
        this.group.description = '';
        Swal.fire("Error !!","Server error", "error")
      }
    );

    

  }

}
