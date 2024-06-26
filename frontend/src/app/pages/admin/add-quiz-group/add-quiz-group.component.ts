import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ActivatedRoute, Router } from '@angular/router';
import { GroupService } from 'src/app/services/group.service';
import { QuizService } from 'src/app/services/quiz.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-add-quiz-group',
  templateUrl: './add-quiz-group.component.html',
  styleUrls: ['./add-quiz-group.component.css']
})
export class AddQuizGroupComponent implements OnInit {


  group=[
    {
      groupId: 23,
      groupName: 'Programming'
    }
  ]

  gid:any;

  quiz={
    title: '',
    description: '',
    maxMarks: '',
    numberOfQuestions: '',
    active: true,
    groups: {
      groupId: ''
    }
  };

  constructor(
    private _group:GroupService,
    private _snak:MatSnackBar,
    private _quiz:QuizService,
    private _route:ActivatedRoute
  ) { }

  ngOnInit(): void { 
    this.gid = this._route.snapshot.paramMap.get("gid");
    console.log(this.gid);

    this.quiz.groups.groupId = this.gid;
  }


  addQuiz() {
    //console.log(this.quiz)
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

    //console.log(this.quiz)

    // for addding quiz
    this._quiz.addQuiz(this.quiz).subscribe(
      (data:any)=>{
        Swal.fire("Success","Quiz is added","success");
        this.quiz={
          title: '',
          description: '',
          maxMarks: '',
          numberOfQuestions: '',
          active: true,
          groups: {
            groupId: this.gid,
          }
        };
      },
      (error)=>{
        Swal.fire("Error !!","Error while adding quiz","error");
      }
    )

  }

}
