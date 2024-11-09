import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class EmployeeProjetcsService {

  constructor(private http:HttpClient) { }

  addEmployeeToProject(data:any){
    return this.http.post('https://freeapi.miniprojectideas.com/api/ClientStrive/AddEmployeeToProject',data);
  }

  getAllProjectsEmployees(){
    return this.http.get('https://freeapi.miniprojectideas.com/api/ClientStrive/GetAllProjectsEmployees');
  }

  deleteEmployeeFromProject(id:number){
    return this.http.delete('https://freeapi.miniprojectideas.com/api/ClientStrive/DeleteEmployeeFromProject?projectEmpId='+id);
  }

}
