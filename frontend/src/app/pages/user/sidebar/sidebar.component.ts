import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { CategoryService } from 'src/app/services/category.service';
import { GroupService } from 'src/app/services/group.service';
import { LoginService } from 'src/app/services/login.service';

@Component({
  selector: 'app-sidebar-user',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {

  categories:any;
  groups:any;
  userId:any;

  constructor(
    private _category:CategoryService,
    private _snack:MatSnackBar,
    private _group:GroupService,
    private _login:LoginService
  ) { }

  ngOnInit(): void {
    this._category.categories().subscribe(
      (data:any)=>{
        this.categories = data;
      },
      (error)=>{
        this._snack.open("Error in loading categories from server", "",{
          duration: 3000,
        });
      }
    )

    this.userId = (localStorage.getItem('user'));
      this.userId=JSON.parse(this.userId)
      console.log(this.userId.id);

    this._group.getGroup(this.userId.id).subscribe(
      (data:any)=>{
        this.groups = data;
      },
      (error)=>{
        this._snack.open("Error in loading group form server","",{
          duration:3000,
        });
      }
    )
      
  }

}
