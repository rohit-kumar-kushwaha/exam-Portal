import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ActivatedRoute, Router } from '@angular/router';
import { CategoryService } from 'src/app/services/category.service';
import { QuizService } from 'src/app/services/quiz.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-update-quiz',
  templateUrl: './update-quiz.component.html',
  styleUrls: ['./update-quiz.component.css']
})
export class UpdateQuizComponent implements OnInit {

  qId:any = 0;
  quiz:any;

  categories=[
    {
      cid: '',
      title: ''
    }
  ]

  constructor(
    private _route:ActivatedRoute, 
    private _quiz:QuizService, 
    private _category:CategoryService, 
    private _snak:MatSnackBar,
    private _router:Router
    ) { }

  ngOnInit(): void {
    this.qId = this._route.snapshot.paramMap.get("qid");
    // alert(this.qId)
    this._quiz.getQuiz(this.qId).subscribe(
      (data:any)=>{
        this.quiz = data;
        console.log(this.quiz);
      },
      (error)=>{
        console.log(error);
      }
    )

    this._category.categories().subscribe(
      (data:any)=>{
        this.categories = data;
        console.log(this.categories);
      },
      (error)=>{
        console.log(error);
        //Swal.fire("Error !!", "Error in loading data from server", "error");
      }
    )
  }

  public updateQuiz() {
    //alert("update");

    if(this.quiz.title.trim()=='' || this.quiz.title.trim()==null) {
      this._snak.open("Title Required !!","",{
        duration: 3000,
      });
      return;
    }

    if(this.quiz.maxMarks.trim()=='' || this.quiz.maxMarks.trim()==null) {
      this._snak.open("Maximum Marks Required !!","",{
        duration: 3000,
      });
      return;
    }

    if(this.quiz.numberOfQuestions.trim()=='' || this.quiz.numberOfQuestions.trim()==null) {
      this._snak.open("Number of Question Required !!","",{
        duration: 3000,
      });
      return;
    }

    if(this.quiz.category.cid=='' || this.quiz.category.cid==null) {
      this._snak.open("Category Required !!","",{
        duration: 3000,
      });
      return;
    }
    //console.log(this.quiz)

    // for addding quiz
    this._quiz.updateQuiz(this.quiz).subscribe(
      (data:any)=>{
        Swal.fire("Success","Quiz is updated","success").then((e)=>{
          this._router.navigate(["/admin/quizzes"]);
        });
      },
      (error)=>{
        Swal.fire("Error !!","Error while updating quiz","error");
      }
    )
  }

}
