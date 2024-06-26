import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { GroupService } from 'src/app/services/group.service';

@Component({
  selector: 'app-view-group-members',
  templateUrl: './view-group-members.component.html',
  styleUrls: ['./view-group-members.component.css']
})
export class ViewGroupMembersComponent implements OnInit {

  user:any;
  gid:any;

  constructor(
    private _group:GroupService,
    private _route:ActivatedRoute
  ) { }

  ngOnInit(): void {

    this.gid = this._route.snapshot.paramMap.get('gid');

    this._group.getUserOfGroup(this.gid).subscribe(
      (data:any)=>{
        this.user = data;
      },
      (error)=>{
        console.log(error);
      }
    )
  }

}
