import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { error } from 'console';
import { LoginService } from 'src/app/services/login.service';
import { MarksService } from 'src/app/services/marks.service';

@Component({
  selector: 'app-marks-details',
  templateUrl: './marks-details.component.html',
  styleUrls: ['./marks-details.component.css']
})
export class MarksDetailsComponent implements OnInit {

  uid:any;
  marks:any;

  constructor(private _marks:MarksService, private _login:LoginService, private _route:ActivatedRoute) { }

  ngOnInit(): void {

    this._route.paramMap.subscribe(
      (params)=>{
        this.uid = params.get('uid');
        console.log(this.uid);

        this._marks.getByUser(this.uid).subscribe(
          (data:any)=>{
            this.marks = data;
            console.log(this.marks);
          },
          (error)=>{
            console.log(error);
          }
        )
      }
    );
    

    
  
  }

}
