import { Component, OnInit } from '@angular/core';

import { ClientService } from 'src/app/services/client.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-client',
  templateUrl: './client.component.html',
  styleUrls: ['./client.component.css']
})
export class ClientComponent implements OnInit {

  clients:any;

  constructor(private clientService:ClientService,
    private router:Router) { }

  ngOnInit(): void {
    this.getAllClients();
  }

  getAllClients(){
    this.clientService.getAllClients().subscribe((res:any)=>{
      this.clients = res.data;
    })
  }

  removeClient(clientId:number){
    this.clientService.deleteClientByClientId(clientId).subscribe((res:any)=>{
      this.getAllClients();
    })
  }

  editClient(clientId:number){
    this.router.navigate(['admin/client/add/',clientId]);
  }

}
