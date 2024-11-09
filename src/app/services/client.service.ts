import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ClientService {

  constructor(private http:HttpClient) { }

  getAllClients(){
    return this.http.get('https://freeapi.miniprojectideas.com/api/ClientStrive/GetAllClients');
  }

  addUpdateClient(data:any){
    return this.http.post('https://freeapi.miniprojectideas.com/api/ClientStrive/AddUpdateClient',data);
  }

  deleteClientByClientId(id:number){
    return this.http.delete('https://freeapi.miniprojectideas.com/api/ClientStrive/DeleteClientByClientId?clientId='+id);
  }

}
