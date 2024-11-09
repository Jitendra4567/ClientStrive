import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormGroup } from '@angular/forms';
import { Route, Router } from '@angular/router';

import { EmployeeService } from 'src/app/services/employee.service';

@Component({
  selector: 'app-add-employee',
  templateUrl: './add-employee.component.html',
  styleUrls: ['./add-employee.component.css']
})
export class AddEmployeeComponent implements OnInit {

  employeeForm!:FormGroup;
  ErpEmployeeSkillsArray:any;
  ErmEmpExperiencesArray:any;


  constructor(private fb:FormBuilder,
    private route:Router,
    private employeeService:EmployeeService) { }

  ngOnInit(): void {

    this.employeeForm = this.fb.group({
      roleId: 0,
      userName: [''],
      empCode: [''],
      empId: 0,
      empName: [''],
      empEmailId: [''],
      empDesignationId: 0,
      empContactNo: [''],
      empAltContactNo: [''],
      empPersonalEmailId: [''],
      empExpTotalYear: 0,
      empExpTotalMonth: 0,
      empCity: [''],
      empState: [''],
      empPinCode: [''],
      empAddress: [''],
      empPerCity: [''],
      empPerState: [''],
      empPerPinCode: [''],
      empPerAddress: [''],
      password: [''],
      ErpEmployeeSkills:this.fb.array([
        this.fb.group({
          empSkillId: 0,
          empId: 0,
          skill: [''],
          totalYearExp: 0,
          lastVersionUsed: ['']
        })
      ]),
      ErmEmpExperiences:this.fb.array([
        this.fb.group({
          empExpId: 0,
          empId: 0,
          companyName: [''],
          startDate: [''],
          endDate: [''],
          designation: [''],
          projectsWorkedOn: ['']
        })
      ])
    })

    this.ErpEmployeeSkillsArray = this.employeeForm.get('ErpEmployeeSkills') as FormArray;
    this.ErmEmpExperiencesArray = this.employeeForm.get('ErmEmpExperiences') as FormArray;

  }

  addSkill(){
    this.ErpEmployeeSkillsArray.push(
      this.fb.group({
        empSkillId: 0,
        empId: 0,
        skill: [''],
        totalYearExp: 0,
        lastVersionUsed: ['']
      })
    )
  }

  removeSkill(index:number){
    this.ErpEmployeeSkillsArray.removeAt(index);
  }

  addExperiences(){
    this.ErmEmpExperiencesArray.push(
      this.fb.group({
        empExpId: 0,
        empId: 0,
        companyName: [''],
        startDate: [''],
        endDate: [''],
        designation: [''],
        projectsWorkedOn: ['']
      })
    )
  }

  removeExperiences(index:number){
    this.ErpEmployeeSkillsArray.removeAt(index);
  }

  saveEmployee(){
    let data = this.employeeForm.value;
    console.log(data,"data");
    this.employeeService.createNewEmployee(data).subscribe((res:any)=>{
      console.log(res,"res");
      this.employeeForm.reset();
      this.route.navigate(['/admin/employee']);
    })    
  }

}
