import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { employeei } from 'src/app/employeeinterface';
import { UiService } from 'src/app/services/ui.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-add-empoloy',
  templateUrl: './add-empoloy.component.html',
  styleUrls: ['./add-empoloy.component.css']
})
export class AddEmpoloyComponent implements OnInit {
  name: string = "";
  email: string = "";
  phonenumber: string="";
  prof: string = "";

  showAddEmpoloyee?:boolean;
  subscription:Subscription

  constructor(private uiService:UiService) {
    this.subscription=this.uiService.ontoggle().subscribe((value)=>(this.showAddEmpoloyee=value))
   }
  @Output() addEmpoloyee:EventEmitter<employeei> = new EventEmitter();

  ngOnInit(): void {
  }
  onSubmit() {
    if (!this.name) {
      alert("pls add a name");
      return;
    }
    else if (!this.email) {
      alert("pls add a email");
      return;
    }
    else if (!this.phonenumber) {
      alert("pls add a phone");
      return;
    }
    const newEmpoloyee = {
      name: this.name,
      email: this.email,
      phonenumber: this.phonenumber,
      prof: this.prof
    }
    this.addEmpoloyee.emit(newEmpoloyee);

    this.name = "";
    this.email = "";
    this.phonenumber = "";
    this.prof = "";
  }

}
