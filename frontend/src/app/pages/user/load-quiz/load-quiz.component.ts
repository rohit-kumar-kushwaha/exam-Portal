import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { QuizService } from 'src/app/services/quiz.service';

@Component({
  selector: 'app-load-quiz',
  templateUrl: './load-quiz.component.html',
  styleUrls: ['./load-quiz.component.css']
})
export class LoadQuizComponent implements OnInit {

  catId:any;
  quizzes:any;

  constructor(
    private _route:ActivatedRoute,
    private _quiz:QuizService
  ) { }

  ngOnInit(): void {
    
    this._route.paramMap.subscribe((params)=>{
      
      this.catId = params.get("catId");
      console.log(this.catId);
      if(this.catId==0) {
        // load All quizzes
        this._quiz.getActiveQuizzes().subscribe(
          (data:any)=>{
            this.quizzes = data;
            console.log(this.quizzes);
          },
          (error)=>{
            console.log(error);
          }
        )
  
      }
      else {
        //load specific quiz
        //alert("s");
        this._quiz.getActiveQuizzesOfCategory(this.catId).subscribe(
          (data:any)=>{
            this.quizzes = data;
          },
          (error)=>{
            console.log(error);
          }
        )
        
      }
    });
    
    
  }

}
