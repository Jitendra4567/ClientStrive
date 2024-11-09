import * as bootstrap from 'bootstrap';

import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

import { EmployeeService } from 'src/app/services/employee.service';
import { ProjectChangesService } from 'src/app/services/project-changes.service';
import { ProjectsService } from 'src/app/services/projects.service';

@Component({
  selector: 'app-project-changes',
  templateUrl: './project-changes.component.html',
  styleUrls: ['./project-changes.component.css']
})
export class ProjectChangesComponent implements OnInit {

  projectChanges:any;
  allProjects:any;
  allEmployee:any;
  projectChangesForm!:FormGroup;
  projectChangesFormStatus = false;

  @ViewChild('modalElement') exampleModalRef!: ElementRef;
  modalInstance!: bootstrap.Modal;

  constructor(private projectChangesService:ProjectChangesService,
    private employeeService:EmployeeService,
    private projectService:ProjectsService,
    private fb:FormBuilder
  ) { }

  ngOnInit(): void {
    this.getAllProjectChange();
    this.getAllClientProjects();
    this.getAllEmployee();

    this.projectChangesForm = this.fb.group({
      projectChangeId: 0,
      projectId: 0,
      changeDetails: [],
      changeDate: [],
      approvedByEmpId: 0
    })

  }

  ngAfterViewInit(): void {
    const modalElement = this.exampleModalRef.nativeElement;
    this.modalInstance = new bootstrap.Modal(modalElement);
  }

  openModal() {
    this.projectChangesForm.reset();
    this.modalInstance.show();
  }

  closeModal() {
    this.modalInstance.hide();
  }

  getAllProjectChange(){
    this.projectChangesService.getAllProjectChange().subscribe((res:any)=>{
      this.projectChanges = res.data;
    })
  }

  getAllClientProjects(){
    this.projectService.getAllClientProjects().subscribe((res:any)=>{
      this.allProjects = res.data;
    })
  }
  getAllEmployee(){
    this.employeeService.getAllEmployee().subscribe((res:any)=>{
      this.allEmployee = res.data;
    })
  }

  save(){
    if (!this.projectChangesForm.value.projectChangeId) {
      this.projectChangesForm.patchValue({ projectChangeId: 0 });
    }
    let data = this.projectChangesForm.value
    this.projectChangesService.addUpdateProjectChange(data).subscribe((res:any)=>{
      this.projectChangesForm.reset();
      this.closeModal();
      this.getAllProjectChange();
    })
  }

  editChanges(data:any){
    this.projectChangesFormStatus = true;
    this.openModal();
    Object.keys(this.projectChangesForm.controls).forEach((key) => {
      this.projectChangesForm.get(key)?.setValue(data[key]);
    });
  }

  update(){
    let updateData = this.projectChangesForm.value;
    this.projectChangesService.addUpdateProjectChange(updateData).subscribe((res:any)=>{
      console.log(res,"res");
      this.projectChangesForm.reset();
      this.closeModal();
      this.getAllProjectChange();
    })
  }

  removeProjectChanges(id:number){
    this.projectChangesService.deleteChangeByChangeId(id).subscribe((res:any)=>{
      console.log(res,"res");
      this.getAllProjectChange();
    })
  }

}
