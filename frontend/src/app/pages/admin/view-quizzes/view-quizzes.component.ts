import { Component, OnInit } from '@angular/core';
import { QuizService } from 'src/app/services/quiz.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-view-quizzes',
  templateUrl: './view-quizzes.component.html',
  styleUrls: ['./view-quizzes.component.css']
})
export class ViewQuizzesComponent implements OnInit {

  quizzes=[
    {
      qid: 23,
      title: "JAva",
      description: "java basic question",
      maxMarks: "50",
      numberOfQuestions: "25",
      active: 'True',
      category: {
        title: "Programming"
      }
    },
  ];

  constructor(private _quiz:QuizService) { }

  ngOnInit(): void {

    this._quiz.getQuizzesOfOnlyGroup().subscribe(
      (data:any)=>{
        this.quizzes = data;
        //this.quizzes.sort();
        console.log(this.quizzes);
      },
      (error)=>{
        console.log(error);
        Swal.fire('Error !','Error in loading data !', 'error');
      }
    )

  }

  deleteQuiz(qid:any) {
    //alert(qid);
    Swal.fire({
      icon: 'info',
      title: "Are you sure ?",
      confirmButtonText: 'Delete',
      showCancelButton: true
    }).then((result)=>{
      if(result.isConfirmed) {
        // delete
        this._quiz.deleteQuiz(qid).subscribe(
          (data:any)=>{
            this.quizzes = this.quizzes.filter((quiz)=>quiz.qid != qid);
            Swal.fire("Success","Quiz Deleted","success");
          },
          (error)=>{
            Swal.fire('Error !','Error in deleting quiz !', 'error');
          }
        )
      }
    });
  }



}
