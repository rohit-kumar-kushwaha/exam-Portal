import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import baseUrl from './helper';

@Injectable({
  providedIn: 'root'
})
export class GroupService {

  constructor(private _http:HttpClient) { }

  // create new group
  public addGroup(group:any) {
    return this._http.post(`${baseUrl}/group/`, group);
  }

  // get all groups
  public getGroups() {
    return this._http.get(`${baseUrl}/group/`);
  }

  // joining in group
  public joinGroup(key:any) {
    return this._http.post(`${baseUrl}/group/join-group`,key);
  }

  // get all group by user
  public getGroup(userId:any) {
    return this._http.get(`${baseUrl}/group/${userId}`);
  }
}
