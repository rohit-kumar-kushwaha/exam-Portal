import { Component, OnInit } from '@angular/core';
import { MatSelect } from '@angular/material/select';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ActivatedRoute } from '@angular/router';
import { QuestionService } from 'src/app/services/question.service';
import Swal from 'sweetalert2';

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
      quesId: '',
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
    private _question:QuestionService,
    private _snack:MatSnackBar

    

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

  // delete question
  deleteQuestion(qid:any){
    //alert(qid);
    Swal.fire({
      icon: 'info',
      showCancelButton: true,
      confirmButtonText: 'Delete',
      title: 'Are you sure, want to delete this question ?'
    }).then((result)=>{
      //alert('delete');
      if(result.isConfirmed) {
        //confirm
        this._question.deleteQuestion(qid).subscribe(
          (data:any)=>{
            this._snack.open("Question Deleted !!","",{
              duration:3000,
            });
            this.questions = this.questions.filter((q)=>q.quesId!=qid);
          },
          (error)=>{
            this._snack.open("Error i deleting question !!","",{
              duration: 3000,
            });
          }
        )
      }
    });
  }

}
