import { Component, OnInit } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { environment } from "../../../environments/environment";
@Component({
  selector: 'app-log-in',
  templateUrl: './log-in.component.html',
  styleUrls: ['./log-in.component.css']
})
export class LogInComponent implements OnInit {

    data = {
      username: '',
      password: '',
    };
    remember: boolean = false
    forget: boolean = false
    submit: boolean = false
    apidata: {} = [];
  constructor(private http: HttpClient) { }

  ngOnInit(): void {
  }

  changeRemember(): void{

  }

  submitAnimation():void{
    
  }

  onSubmit():void {
    //this.submitAnimation();
    console.log(this.data);
    
    this.http.get(`${environment.serverUrl}/users?username=${this.data.username}`)
    .subscribe(res =>{
      console.log(res);
      
    })
       
  }
}
