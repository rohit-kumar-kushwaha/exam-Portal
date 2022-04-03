import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { QuestionService } from 'src/app/services/question.service';
import Swal from 'sweetalert2';
import * as ClassicEditor from '@ckeditor/ckeditor5-build-classic';


@Component({
  selector: 'app-add-question',
  templateUrl: './add-question.component.html',
  styleUrls: ['./add-question.component.css']
})
export class AddQuestionComponent implements OnInit {

  public Editor = ClassicEditor;


  qId:any;
  qTitle:any;
  question = {
    quiz: {
      qid: ''
    },
    content: '',
    option1: '',
    option2: '',
    option3: '',
    option4: '',
    answer: ''
  };


  constructor(
    private _route:ActivatedRoute,
    private _question:QuestionService
  ) { }

  ngOnInit(): void {
    this.qId = this._route.snapshot.paramMap.get("qid");
    this.qTitle = this._route.snapshot.paramMap.get("title");
    //alert(this.qId);
    this.question.quiz['qid'] = this.qId;
  }

  questionAddFormSubmit() {
    //alert("Question added");
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
    this._question.addQuestion(this.question).subscribe(
      (data:any)=>{
        Swal.fire("Success","Question Added. Add another one","success");
        this.question = {
          quiz: {
            qid: ''
          },
          content: '',
          option1: '',
          option2: '',
          option3: '',
          option4: '',
          answer: ''
        };
      },
      (error)=>{
        Swal.fire("Error !!","Error in adding question","error");
      }
    )
  }

}
