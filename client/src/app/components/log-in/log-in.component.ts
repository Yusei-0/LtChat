import { Component, OnInit } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { environment } from "../../../environments/environment";
import { Router } from '@angular/router';

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
  constructor(private http: HttpClient, private router : Router) { }

  ngOnInit(): void {
  }

  changeRemember(): void{

  }

  submitAnimation():void{
    
  }

  onSubmit():void {
    //this.submitAnimation();
    //console.log(this.data);
    
    this.http.get(`${environment.serverUrl}/users/login?username=Yusei-3&password=Zero`)
    .subscribe( res =>{
      console.log(res);
      if(res)
      this.router.navigate(['/home']);
      else {
        this.router.navigate(['/register']);
      }
      
    })
    
  }

}
