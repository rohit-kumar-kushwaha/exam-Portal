import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { LoginService } from 'src/app/services/login.service';

@Component({
  selector: 'app-update-profile',
  templateUrl: './update-profile.component.html',
  styleUrls: ['./update-profile.component.css']
})
export class UpdateProfileComponent implements OnInit {

  public user:any;
  fileName:any;

  constructor(public _login:LoginService, private _http:HttpClient) { }

  ngOnInit(): void {

    this.user = this._login.getUser();
    // this.login.getCurrentUser().subscribe(
    //   (user:any)=>{
    //     this.user = user;
    //   }
    // )
  }

  onFileSelected(event:any) {

    // const file:File = event.target.files[0];
    // console.log("FILE : "+file.name);

    // if (file) {

    //     this.fileName = file.name;

    //     const formData = new FormData();

    //     formData.append("thumbnail", file);

    //     const upload$ = this._http.post("/api/thumbnail-upload", formData);

    //     upload$.subscribe();
    // }

    if (event.target.files && event.target.files[0]) {
      // var reader = new FileReader();
      // reader.onload = (event: any) => {
      //     this.fileName = event.target.result;
      // }
      // reader.readAsDataURL(event.target.files[0]);
      this.fileName = event.target.value;
      console.log("FILE : "+this.fileName);
  }
}

  formSubmit() {

  }

}
