import { ActivatedRoute, Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

import { ClientService } from 'src/app/services/client.service';

@Component({
  selector: 'app-add-client',
  templateUrl: './add-client.component.html',
  styleUrls: ['./add-client.component.css']
})
export class AddClientComponent implements OnInit {

  clientId:number | undefined;
  clientFrom!:FormGroup;
  allClients:any;

  constructor(private fb:FormBuilder,
    private router:Router,
    private route:ActivatedRoute,
    private clientService:ClientService) { }

  ngOnInit(): void {
    this.clientFrom = this.fb.group({
      clientId: 0,
      contactPersonName: [''],
      companyName: [''],
      address: [''],
      city: [''],
      pincode: [''],
      state: [''],
      EmployeeStrength: 0,
      gstNo: [''],
      contactNo: [''],
      regNo: ['']
    })

    this.route.params.subscribe(param =>{
      this.clientId = +param['clientId'];
      if(this.clientId){
        this.clientService.getAllClients().subscribe((res:any)=>{
          this.allClients = res.data;
          let clientData = this.allClients.filter((id:any) => id.clientId ===  this.clientId);
          if (clientData) {
            this.clientFrom.patchValue({
              clientId: clientData[0].clientId,
              contactPersonName: clientData[0].contactPersonName,
              companyName: clientData[0].companyName,
              address: clientData[0].address,
              city: clientData[0].city,
              pincode: clientData[0].pincode,
              state: clientData[0].state,
              EmployeeStrength: clientData[0].EmployeeStrength,
              gstNo: clientData[0].gstNo,
              contactNo: clientData[0].contactNo,
              regNo: clientData[0].regNo
            });
          }
        })
      }
    })

  }

  saveClient(){
    let data = this.clientFrom.value
    this.clientService.addUpdateClient(data).subscribe((res:any)=>{
      this.clientFrom.reset();
      this.router.navigate(['/admin/client']);
    })
  }

}
