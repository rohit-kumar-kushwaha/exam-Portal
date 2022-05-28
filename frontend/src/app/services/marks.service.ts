import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import baseUrl from './helper';

@Injectable({
  providedIn: 'root'
})
export class MarksService {

  constructor(private _http:HttpClient) { }

  public addMarks(marks:any) {
    return this._http.post(`${baseUrl}/marks/`, marks);
  }

  public getByUser(uid:any) {
    return this._http.get(`${baseUrl}/marks/user/${uid}`);
  }

  public getByQuiz(qid:any) {
    return this._http.get(`${baseUrl}/marks/quiz/${qid}`);
  }


}
