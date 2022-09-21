import { Injectable } from '@angular/core';
import { employeei } from '../employeeinterface';
// import { empoloyee } from '../employeedata';
import { Observable,of} from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';

const httpOption={
  headers:new HttpHeaders({'content-Type':'application/json'})
}
@Injectable({
  providedIn: 'root'
})
export class EmpoloyeService {
  private apiUrl="http://localhost:3000/empoloyee";

  constructor(private http:HttpClient) { }
  getdata():Observable<employeei [] >{
    // const data=of(empoloyee);
    // return data;
    return this.http.get<employeei[]>(this.apiUrl);
  }
  deleteTask(data:employeei):Observable<employeei>{
    const url=  `${this.apiUrl}/${data.id}`
    return this.http.delete<employeei>(url);
  }
  addEmpoloyeeService(newEmpoloyee:employeei):Observable<employeei>{
    return this.http.post<employeei>(this.apiUrl,newEmpoloyee,httpOption)
  }
}
