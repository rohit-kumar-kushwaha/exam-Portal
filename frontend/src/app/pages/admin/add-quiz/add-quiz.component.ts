import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { CategoryService } from 'src/app/services/category.service';
import { QuizService } from 'src/app/services/quiz.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-add-quiz',
  templateUrl: './add-quiz.component.html',
  styleUrls: ['./add-quiz.component.css']
})
export class AddQuizComponent implements OnInit {

  categories=[
    {
      cid: 23,
      title: 'Programming'
    }
  ]

  quiz={
    title: '',
    description: '',
    maxMarks: '',
    numberOfQuestions: '',
    active: true,
    category: {
      cid: ''
    }
  };

  constructor(private _category:CategoryService, private _snak:MatSnackBar, private _quiz:QuizService) { }

  ngOnInit(): void {

    this._category.categories().subscribe(
      (data:any)=>{
        this.categories = data;
        console.log(this.categories);
      },
      (error)=>{
        console.log(error);
        Swal.fire("Error !!", "Error in loading data from server", "error");
      }
    )

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

    if(this.quiz.category.cid=='' || this.quiz.category.cid==null) {
      this._snak.open("Category Required !!","",{
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
          category: {
            cid: ''
          }
        };
      },
      (error)=>{
        Swal.fire("Error !!","Error while adding quiz","error");
      }
    )

  }

}
