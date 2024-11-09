import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ProjectsService {

  constructor(private http:HttpClient) { }

  getAllClientProjects(){
    return this.http.get('https://freeapi.miniprojectideas.com/api/ClientStrive/GetAllClientProjects');
  }

  addUpdateClientProject(data:any){
    return this.http.post('https://freeapi.miniprojectideas.com/api/ClientStrive/AddUpdateClientProject',data);
  }

  deleteProjectByProjectId(id:number){
    return this.http.delete('https://freeapi.miniprojectideas.com/api/ClientStrive/DeleteProjectByProjectId?projectId='+id);
  }

  getProjectByProjectId(id:number){
    return this.http.get('https://freeapi.miniprojectideas.com/api/ClientStrive/GetProjectByProjectId?clientProjectId='+id);
  }

}
