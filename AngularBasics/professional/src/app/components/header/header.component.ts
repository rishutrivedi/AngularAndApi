import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { UiService } from 'src/app/services/ui.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  showAddEmpoloyee:boolean=false;
  subscription?:Subscription;

  constructor(private uiService:UiService, private router:Router) { 
    console.log("togglefirst6p");
    this.subscription=this.uiService
                                   .ontoggle()
                                   .subscribe((value)=>(this.showAddEmpoloyee=value))
  }

  ngOnInit(): void {
  }
  toggleTask(){
    console.log("toggle");
    this.uiService.toggleAddEmpoloyee();
  }

}
