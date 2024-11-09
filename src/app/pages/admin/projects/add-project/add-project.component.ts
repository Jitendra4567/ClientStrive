import { ActivatedRoute, Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

import { ClientService } from 'src/app/services/client.service';
import { EmployeeService } from 'src/app/services/employee.service';
import { ProjectsService } from 'src/app/services/projects.service';

@Component({
  selector: 'app-add-project',
  templateUrl: './add-project.component.html',
  styleUrls: ['./add-project.component.css']
})
export class AddProjectComponent implements OnInit {

  addProjectsform!:FormGroup;
  allEmployee:any;
  clients:any;
  projectId:any;
  allProjects:any;
  projectData:any;

  constructor(private fb:FormBuilder,
    private projectService:ProjectsService,
    private clientService:ClientService,
    private router:Router,
    private activeRouter:ActivatedRoute,
    private employeeService:EmployeeService) { }

  ngOnInit(): void {

    this.getAllEmployee();
    this.getAllClients();

    this.addProjectsform = this.fb.group({
      clientProjectId: 0,
      projectName: [''],
      startDate: [''],
      expectedEndDate: [''],
      leadByEmpId: 0,
      completedDate: [''],
      contactPerson: [''],
      contactPersonContactNo: [''],
      totalEmpWorking: [''],
      projectCost: [''],
      projectDetails: [''],
      contactPersonEmailId: [''],
      clientId: 0      
    })
    
    this.activeRouter.params.subscribe((res:any)=>{
      this.projectId = res['projectId']
      if(this.projectId){
        this.projectService.getAllClientProjects().subscribe((res:any)=>{
          this.allProjects = res.data;
          this.projectData = this.allProjects.filter((id:any) => id.clientProjectId === +this.projectId)
          console.log(this.projectData,"this.projectData");
          
          if(this.projectData){
            this.addProjectsform.patchValue({
              projectName: this.projectData[0].projectName,
              startDate: this.projectData[0].startDate,
              expectedEndDate: this.projectData[0].expectedEndDate,
              leadByEmpId: this.projectData[0].empId,
            })
          }
          
  
        })
      }
      
      
    })
    

    

  }


  saveAddProject(){
    let postData = this.addProjectsform.value;
    console.log(postData,"postData");
    this.projectService.addUpdateClientProject(postData).subscribe((res:any)=>{
      console.log(res,"res");
      this.addProjectsform.reset();
      this.router.navigate(['admin/projects']);
    })    
  }

  getAllEmployee(){
    this.employeeService.getAllEmployee().subscribe((res:any)=>{
      this.allEmployee = res.data;
      
    })
  }

  getAllClients(){
    this.clientService.getAllClients().subscribe((res:any)=>{
      this.clients = res.data;
    })
  }


}
