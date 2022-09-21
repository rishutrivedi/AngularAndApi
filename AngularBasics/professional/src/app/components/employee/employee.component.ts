import { Component, OnInit } from '@angular/core';
import { EmpoloyeService } from 'src/app/services/empoloye.service';
import { employeei } from 'src/app/employeeinterface';

@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.css']
})
export class EmployeeComponent implements OnInit {
  data:employeei[]=[];
  constructor(private datas:EmpoloyeService) { }

  ngOnInit(): void {
    this.datas.getdata().subscribe((data)=>(this.data=data))
    }
    deleteEmpoloy(p:employeei){
      this.datas.deleteTask(p).subscribe(()=>(this.data=this.data.filter(t=>t.id !==p.id)))
    }
    addEmpoloyee(p:employeei){
      this.datas.addEmpoloyeeService(p).subscribe((p)=>this.data.push(p))
    }
}
