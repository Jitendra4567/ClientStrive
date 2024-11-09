import * as bootstrap from 'bootstrap';

import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

import { EmployeeProjetcsService } from 'src/app/services/employee-projetcs.service';
import { EmployeeService } from 'src/app/services/employee.service';
import { ProjectsService } from 'src/app/services/projects.service';

@Component({
  selector: 'app-employee-projects',
  templateUrl: './employee-projects.component.html',
  styleUrls: ['./employee-projects.component.css']
})
export class EmployeeProjectsComponent implements OnInit {

  allEmployee:any;
  allProjects:any;
  employeeProjectForm!:FormGroup;
  allEmployeeProjects:any;

  @ViewChild('modalElement') exampleModalRef!: ElementRef;
  modalInstance!: bootstrap.Modal;

  constructor(private employeeService:EmployeeService,
    private projectService:ProjectsService,
    private fb:FormBuilder,
    private employeeProjectService:EmployeeProjetcsService) { }

  ngOnInit(): void {
    this.getAllEmployee();
    this.getAllClientProjects();
    this.getAllProjectsEmployees();

    this.employeeProjectForm = this.fb.group({
      projectEmpId:0,
      employeeId:0,
      projectId:0,
      addedDate:0
    })

  }

  ngAfterViewInit(): void {
    const modalElement = this.exampleModalRef.nativeElement;
    this.modalInstance = new bootstrap.Modal(modalElement);
  }

  openModal() {
    this.modalInstance.show();
  }

  closeModal() {
    this.modalInstance.hide();
  }

  getAllEmployee(){
    this.employeeService.getAllEmployee().subscribe((res:any)=>{
      this.allEmployee = res.data;
    })
  }

  getAllClientProjects(){
    this.projectService.getAllClientProjects().subscribe((res:any)=>{
      this.allProjects = res.data;
    })
  }

  save(){
    let data = this.employeeProjectForm.value;
    this.employeeProjectService.addEmployeeToProject(data).subscribe((res:any)=>{
      this.employeeProjectForm.reset();
      this.closeModal();
      this.getAllProjectsEmployees();
    })
  }

  getAllProjectsEmployees(){
    this.employeeProjectService.getAllProjectsEmployees().subscribe((res:any)=>{
      this.allEmployeeProjects = res.data;
    })
  }

  removeEmployeeProjects(id:number){
    this.employeeProjectService.deleteEmployeeFromProject(id).subscribe((res:any)=>{
      this.getAllProjectsEmployees();
    })
  }

}
