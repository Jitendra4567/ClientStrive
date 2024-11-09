import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

  constructor(private http:HttpClient) { }

  getAllEmployee(){
    return this.http.get('https://freeapi.miniprojectideas.com/api/ClientStrive/GetAllEmployee');
  }

  createNewEmployee(data:any){
    return this.http.post('https://freeapi.miniprojectideas.com/api/ClientStrive/CreateNewEmployee',data);
  }

}
