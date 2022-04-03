import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { QuestionService } from 'src/app/services/question.service';

@Component({
  selector: 'app-view-quiz-questions',
  templateUrl: './view-quiz-questions.component.html',
  styleUrls: ['./view-quiz-questions.component.css']
})
export class ViewQuizQuestionsComponent implements OnInit {

  qId:any;
  qTitle:any;
  questions = [
    {
      content: '',
      option1: '',
      option2: '',
      option3: '',
      option4: '',
      answer: '',
    }
  ];


  constructor(

    private _rout:ActivatedRoute,
    private _question:QuestionService

    

  ) { }

  ngOnInit(): void {

    this.qId = this._rout.snapshot.paramMap.get("qid");
    this.qTitle = this._rout.snapshot.paramMap.get("title");
    console.log("qid : ",this.qId);
    console.log("Title : ",this.qTitle);

    this._question.getQuestionsOfQuiz(this.qId).subscribe(
      (data:any)=>{
        this.questions = data;
        console.log("Questions : ",this.questions);
      },
      (error)=>{
        console.log(error);
      }
    )

  }

}
