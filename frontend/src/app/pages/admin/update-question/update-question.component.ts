import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { QuestionService } from 'src/app/services/question.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-update-question',
  templateUrl: './update-question.component.html',
  styleUrls: ['./update-question.component.css']
})
export class UpdateQuestionComponent implements OnInit {

  quesId:any;
  quizTitle:any;
  question:any;

  constructor(
    private _route:ActivatedRoute,
    private _question:QuestionService,
    private _router:Router
  ) { }

  ngOnInit(): void {
    this.quesId = this._route.snapshot.paramMap.get("questionId");
    this.quizTitle = this._route.snapshot.paramMap.get("title");
    //lert(this.quesId);
    this._question.getSingleQuestion(this.quesId).subscribe(
      (data:any)=>{
        this.question = data;
        console.log(this.question);
      },
      (error)=>{
        console.log(error);
      }
    );
  }

  updateQuestion() {
    if(this.question.content.trim()=='' || this.question.content.trim()==null){
      return;
    }

    if(this.question.option1.trim()=='' || this.question.option1.trim()==null){
      return;
    }
    if(this.question.option2.trim()=='' || this.question.option2.trim()==null){
      return;
    }
    if(this.question.option3.trim()=='' || this.question.option3.trim()==null){
      return;
    }
    if(this.question.answer.trim()=='' || this.question.answer.trim()==null){
      return;
    }

    // form submit
    this._question.updateQuestion(this.question).subscribe(
      (data:any)=>{
        Swal.fire("Success","Question Added. Add another one","success");
        this._router.navigate(['/admin/view-questions/'+this.question.quiz.qid+'/'+this.quizTitle])
      },
      (error)=>{
        Swal.fire("Error !!","Error in adding question","error");
      }
    )
  }

}
