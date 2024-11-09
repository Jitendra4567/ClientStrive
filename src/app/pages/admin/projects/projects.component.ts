import { Component, OnInit } from '@angular/core';

import { ClientService } from 'src/app/services/client.service';
import { EmployeeService } from 'src/app/services/employee.service';
import { ProjectsService } from 'src/app/services/projects.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.css']
})
export class ProjectsComponent implements OnInit {

  allProjects:any;
  allProjectsBackup: any[] = [];
  allEmployee:any;
  selectedProjectLead:any;
  selectedProjectByClient:any;
  projectDetail:any;
  

  constructor(private projectService:ProjectsService,
    private router:Router,
    private employeeService:EmployeeService) { }

  ngOnInit(): void {
    this.getAllClientProjects();
    this.getAllEmployee();
  }

  getAllClientProjects(){
    this.projectService.getAllClientProjects().subscribe((res:any)=>{
      this.allProjects = res.data;
      this.allProjectsBackup = [...this.allProjects];
    })
  }

  getAllEmployee(){
    this.employeeService.getAllEmployee().subscribe((res:any)=>{
      this.allEmployee = res.data;
    })
  }
  

  filterProjectsByLead(){
    this.allProjects = [...this.allProjectsBackup];
    if(this.selectedProjectLead){
      this.allProjects = this.allProjects.filter((project: any) => String(project.empId) === String(this.selectedProjectLead));
    }
  }

  deleteProjectByProjectId(id:number){
    this.projectService.deleteProjectByProjectId(id).subscribe((res:any)=>{
      // console.log(res,"res");
      this.getAllClientProjects();
    })
  }

  updateProjectByProjectId(id:number){
    this.router.navigate(['admin/projects/add/',id])
  }

  viewProjectDetail(id:number){
    this.projectService.getProjectByProjectId(id).subscribe((res:any)=>{
      // console.log(res.data,"res.data");
      this.projectDetail = res.data; 
    })
  }


  

}
