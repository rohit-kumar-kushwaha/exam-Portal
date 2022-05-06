import { LocationStrategy } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { QuestionService } from 'src/app/services/question.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-start-quiz',
  templateUrl: './start-quiz.component.html',
  styleUrls: ['./start-quiz.component.css']
})
export class StartQuizComponent implements OnInit {

  qid : any;
  questions:any;

  marksGot=0;
  correctAnswers = 0;
  attempted = 0;

  isSubmit = false;

  constructor(
    private locationSt:LocationStrategy,
    private _route:ActivatedRoute,
    private _question:QuestionService
    ) { }


  ngOnInit(): void {
    this.preventBackButton();
    this.qid = this._route.snapshot.paramMap.get('qid');
    // console.log(this.qid);

    this.loadQuestions();
  }

  loadQuestions() {
    this._question.getQuestionsOfQuizForTest(this.qid).subscribe(
      (data:any)=>{
        // console.log(data);
        this.questions = data;

        this.questions.forEach((q:any) => {
          q['givenAnswer'] = '';
          
        });
      },
      (error)=>{
        console.log(error);
        Swal.fire("Error !", "Error in loading questions of quiz","error");
      }
    )
  }

  // prevent back botton
  preventBackButton() {
    history.pushState(null, '', location.href)
    this.locationSt.onPopState(()=>{
      history.pushState(null, '', location.href);
    })
  }

  submitQuiz() {
    Swal.fire({
      title: 'Do you want to submit the quiz?',
      showCancelButton: true,
      confirmButtonText: `Submit`,
      icon: 'info'
    }).then((e)=>{
      if(e.isConfirmed) {
        // calculation
        // console.log(this.questions);
        this.isSubmit = true;
        let marksSingle = this.questions[0].quiz.maxMarks/this.questions.length;
        this.questions.forEach((q:any)=>{
          if(q.givenAnswer == q.answer) {
            this.correctAnswers++;
            this.marksGot += marksSingle;
          }
          if(q.givenAnswer.trim() != '') {
            this.attempted++;
          }
          
        })

        console.log("Correct answer : "+this.correctAnswers);
        console.log("Marks Got : "+this.marksGot);
        console.log("Attempted Question : "+this.attempted);

      }
    })
  }

}
