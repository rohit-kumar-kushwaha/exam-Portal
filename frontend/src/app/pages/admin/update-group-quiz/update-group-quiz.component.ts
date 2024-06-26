import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ActivatedRoute, Router } from '@angular/router';
import { GroupService } from 'src/app/services/group.service';
import { QuizService } from 'src/app/services/quiz.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-update-group-quiz',
  templateUrl: './update-group-quiz.component.html',
  styleUrls: ['./update-group-quiz.component.css']
})
export class UpdateGroupQuizComponent implements OnInit {

  qid:any;
  quiz:any;


  constructor(
    private _quiz:QuizService,
    private _route:ActivatedRoute,
    private _router:Router,
    private _group:GroupService,
    private _snak:MatSnackBar
  ) { }

  ngOnInit(): void {
    this.qid = this._route.snapshot.paramMap.get('qid');
    console.log(this.qid);

    this._quiz.getQuiz(this.qid).subscribe(
      (data:any)=>{
        this.quiz = data;
        console.log(this.quiz);
      },
      (error)=>{
        console.log(error);
      }
    )

  }

  updateQuiz() {

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

    // if(this.quiz.category.cid=='' || this.quiz.category.cid==null) {
    //   this._snak.open("Category Required !!","",{
    //     duration: 3000,
    //   });
    //   return;
    // }
    //console.log(this.quiz)

    // for addding quiz
    this._quiz.updateQuiz(this.quiz).subscribe(
      (data:any)=>{
        Swal.fire("Success","Quiz is updated","success").then((e)=>{
          this._router.navigate(["/admin/add-group-quiz/"+this.quiz.groups.groupId]);
        });
      },
      (error)=>{
        Swal.fire("Error !!","Error while updating quiz","error");
      }
    )
  }

} 
