import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-selfapi',
  templateUrl: './selfapi.component.html',
  styleUrls: ['./selfapi.component.css']
})
export class SelfapiComponent implements OnInit {
userlist:any
isCreateMode:boolean
  user:any

  constructor(private httpclient:HttpClient) { 
    this.userlist=[]
    this.isCreateMode=false
    this.user={
      name:"",
      score:"",
      email:"",
      phone:""
    }
  }

  ngOnInit(): void {
    this.getUser()
  }
  getUser(){
  this.httpclient.get("http://localhost:3000/users").subscribe((result:any)=>
    {
      this.userlist=result
    })
  }
  adduser(){
    this.isCreateMode=true
  }
  cancel(){
    this.isCreateMode=false
  }
  saveUser(){
    this.httpclient.post("http://localhost:3000/users",this.user).subscribe(()=>
    {
      alert("user save successful")
    })
  }
  delete(userid:any){
    this.httpclient.delete("http://localhost:3000/users/"+userid).subscribe(()=>
    {
      alert("delete successfully")
    })
  }
}
