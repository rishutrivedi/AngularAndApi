import { Injectable } from '@angular/core';
import { Observable,Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UiService {
  private showAddEmpoloyee:boolean=false;
  private subject=new Subject<any>();

  constructor() { }
  toggleAddEmpoloyee():void{
    console.log("this is a form service ")
    this.showAddEmpoloyee=!this.showAddEmpoloyee;
    this.subject.next(this.showAddEmpoloyee);
  }
  ontoggle():Observable<any>{
    return this.subject.asObservable();
  }
}
