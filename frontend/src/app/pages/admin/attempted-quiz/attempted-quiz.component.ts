import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MarksService } from 'src/app/services/marks.service';

@Component({
  selector: 'app-attempted-quiz',
  templateUrl: './attempted-quiz.component.html',
  styleUrls: ['./attempted-quiz.component.css']
})
export class AttemptedQuizComponent implements OnInit {

  marksDetails:any;
  qid:any;
  // qTitle:any;

  constructor(private _marks:MarksService, private _route:ActivatedRoute) { }

  ngOnInit(): void {

    this._route.paramMap.subscribe(
      (params)=>{
        this.qid = params.get('qid');
        console.log(this.qid);
        
        this._marks.getByQuiz(this.qid).subscribe(
          (data:any)=>{
            this.marksDetails = data;
            // this.qTitle = this.marksDetails.quizzes;
            // console.log(this.marksDetails);
            // console.log(this.qTitle);
          },
          (error)=>{
            console.log(error);
          }
        )
      }
    );
  }

}
