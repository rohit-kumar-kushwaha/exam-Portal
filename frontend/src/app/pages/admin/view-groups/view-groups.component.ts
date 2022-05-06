import { Component, OnInit } from '@angular/core';
import { GroupService } from 'src/app/services/group.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-view-groups',
  templateUrl: './view-groups.component.html',
  styleUrls: ['./view-groups.component.css']
})
export class ViewGroupsComponent implements OnInit {

  groups = [
    {
      groupId: '',
      groupName: '',
      description: '',
      createdBy: '',
    }
  ]

  constructor(private _group:GroupService) { }

  ngOnInit(): void {
    this._group.getGroups().subscribe(
      (data:any)=>{
        this.groups = data;
        console.log(this.groups);
      },
      (error)=>{
        console.log(error);
        Swal.fire("Error !!","Error in loading data","error");
      }
    )
  }

}
