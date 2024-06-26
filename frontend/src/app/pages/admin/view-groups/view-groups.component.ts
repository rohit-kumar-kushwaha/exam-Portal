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
      secretKey: '',
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

  deleteQuiz(gid:any) {
    //alert(qid);
    Swal.fire({
      icon: 'info',
      title: "Are you sure ?",
      confirmButtonText: 'Delete',
      showCancelButton: true
    }).then((result)=>{
      if(result.isConfirmed) {
        // delete
        this._group.deleteGroup(gid).subscribe(
          (data:any)=>{
            this.groups = this.groups.filter((g)=>g.groupId != gid);
            Swal.fire("Success","Quiz Deleted","success");
          },
          (error)=>{
            Swal.fire('Error !','Error in deleting quiz !', 'error');
          }
        )
      }
    });
  }

}
