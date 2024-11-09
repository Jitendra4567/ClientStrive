import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ProjectChangesService {

  constructor(private http:HttpClient) { }

  getAllProjectChange(){
    return this.http.get('https://freeapi.miniprojectideas.com/api/ClientStrive/GetAllProjectChange');
  }

  addUpdateProjectChange(data:any){
    return this.http.post('https://freeapi.miniprojectideas.com/api/ClientStrive/AddUpdateProjectChange',data);
  }

  deleteChangeByChangeId(id:number){
    return this.http.delete('https://freeapi.miniprojectideas.com/api/ClientStrive/DeleteChangeByChangeId?changeId='+id);
  }


}
