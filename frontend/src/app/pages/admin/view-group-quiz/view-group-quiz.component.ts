import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { QuizService } from 'src/app/services/quiz.service';

@Component({
  selector: 'app-view-group-quiz',
  templateUrl: './view-group-quiz.component.html',
  styleUrls: ['./view-group-quiz.component.css']
})
export class ViewGroupQuizComponent implements OnInit {

  quizzes:any;
  gid:any;

  constructor(private _quiz:QuizService, private _route:ActivatedRoute) { }

  ngOnInit(): void {
    this.gid = this._route.snapshot.paramMap.get('gid')

    this._quiz.getQuizzesOfGroup(this.gid).subscribe(
      (data:any)=>{
        this.quizzes = data;
        console.log(this.quizzes);

      },
      (error)=>{
        console.log(error);
      }
    )
  }

  deleteQuiz(qid:any) {
    
  }

}
