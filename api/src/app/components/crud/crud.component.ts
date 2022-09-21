import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-crud',
  templateUrl: './crud.component.html',
  styleUrls: ['./crud.component.css']
})
export class CrudComponent implements OnInit {
  userdata:any
  isCreateMode:boolean
  user:any
  constructor(private httpclient:HttpClient) { 
    this.userdata=[]
    this.isCreateMode=false
    this.user={
      name:"",
      username:"",
      email:"",
      phone:"",  
      website:""
     }
  }

  ngOnInit(): void {
    this.getuser()
  }
  getuser(){
    this.httpclient.get("https://jsonplaceholder.typicode.com/users").subscribe((result:any)=>{
      this.userdata=result
    })
  }
  addUser(){
    this.isCreateMode=true;
  }
  cancel(){
    this.isCreateMode=false;
  }
  saveUser(){
  this.httpclient.post("https://jsonplaceholder.typicode.com/users",this.user).subscribe(()=>{
    alert("use save successfully")
  }
  )}
}
