import { Component, OnInit } from '@angular/core';

import { EmployeeService } from 'src/app/services/employee.service';

@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.css']
})
export class EmployeeComponent implements OnInit {

  allEmployee:any;

  constructor(private employeeService:EmployeeService) { }

  ngOnInit(): void {
    this.getAllEmployee();
  }

  getAllEmployee(){
    this.employeeService.getAllEmployee().subscribe((res:any)=>{
      console.log(res.data,"res");
      this.allEmployee = res.data;
    })
  }

}
