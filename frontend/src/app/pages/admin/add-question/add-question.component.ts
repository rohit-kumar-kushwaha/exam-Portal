import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { QuestionService } from 'src/app/services/question.service';

@Component({
  selector: 'app-add-question',
  templateUrl: './add-question.component.html',
  styleUrls: ['./add-question.component.css']
})
export class AddQuestionComponent implements OnInit {

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

}
