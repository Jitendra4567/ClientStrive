import * as bootstrap from 'bootstrap';

import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

import { ClientService } from 'src/app/services/client.service';
import { EmployeeService } from 'src/app/services/employee.service';
import { HighlightTag } from 'angular-text-input-highlight';
import { MeetingsService } from 'src/app/services/meetings.service';
import { ProjectsService } from 'src/app/services/projects.service';

@Component({
  selector: 'app-meetings',
  templateUrl: './meetings.component.html',
  styleUrls: ['./meetings.component.css']
})
export class MeetingsComponent implements OnInit {

  allMeetings:any;
  selectedOption = 'false';
  allProjects:any;
  allEmployee:any;
  clients:any;
  meetingForm!:FormGroup;
  updateMeetingData = false;

  @ViewChild('modalElement') exampleModalRef!: ElementRef;
  modalInstance!: bootstrap.Modal;


  text: string = 'Hello @mattlewis92 how are you today?\n\nLook I have a #different background color!\n\n@angular is pretty awesome!';

  tags: HighlightTag[] = [];

  tagClicked: any;

  constructor(private meetingService:MeetingsService,
    private employeeService:EmployeeService,
    private clientService:ClientService,
    private projectService:ProjectsService,
    private fb:FormBuilder) { }

  ngOnInit(): void {
    this.getAllMeetings();
    this.addTags();
    this.getAllClientProjects();
    this.getAllEmployee();
    this.getAllClients();


    this.meetingForm = this.fb.group({
      projectMeetingId: 0,
      projectId: 0,
      meetingLeadByEmpId: 0,
      meetingDate: [''],
      startTime: [''],
      endTime: [''],
      meetingMedium: [''],
      isRecordingAvailable: true,
      recordingUrl: [''],
      meetingNotes: [''],
      clientPersonNames: [''],
      meetingTitle: [''],
      meetingStatus: ['']
    })

  }

  addTags() {
    this.tags = [];
    const matchMentions = /(@\w+) ?/g;
    let mention;
    // tslint:disable-next-line
    while ((mention = matchMentions.exec(this.text))) {
      this.tags.push({
        indices: {
          start: mention.index,
          end: mention.index + mention[1].length
        },
        data: mention[1]
      });
    }

    const matchHashtags = /(#\w+) ?/g;
    let hashtag;
    // tslint:disable-next-line
    while ((hashtag = matchHashtags.exec(this.text))) {
      this.tags.push({
        indices: {
          start: hashtag.index,
          end: hashtag.index + hashtag[1].length
        },
        cssClass: 'bg-pink',
        data: hashtag[1]
      });
    }
  }

  addDarkClass(elm: HTMLElement) {
    if (elm.classList.contains('bg-blue')) {
      elm.classList.add('bg-blue-dark');
    } else if (elm.classList.contains('bg-pink')) {
      elm.classList.add('bg-pink-dark');
    }
  }

  removeDarkClass(elm: HTMLElement) {
    elm.classList.remove('bg-blue-dark');
    elm.classList.remove('bg-pink-dark');
  }

  ngAfterViewInit(): void {
    const modalElement = this.exampleModalRef.nativeElement;
    this.modalInstance = new bootstrap.Modal(modalElement);
  }

  openModal() {
    this.meetingForm.reset();
    this.modalInstance.show();
  }

  closeModal() {
    this.modalInstance.hide();
  }

  getAllMeetings(){
    this.meetingService.getAllMeetings().subscribe((res:any)=>{
      this.allMeetings =  res.data   
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
  getAllClients(){
    this.clientService.getAllClients().subscribe((res:any)=>{
      this.clients = res.data;
    })
  }

  saveAddMeeting(){
    let data = this.meetingForm.value;
    this.meetingService.addUpdateProjectMeeting(data).subscribe((res:any)=>{
      this.meetingForm.reset();
      this.closeModal();
      this.getAllMeetings();
    })
  }

  removeMeeting(id:Number){
    this.meetingService.deleteMeetingByMeetingId(id).subscribe((res:any)=>{
      this.getAllMeetings();
    })
  }

  editMeeting(data:any){
    this.updateMeetingData = true;
    this.openModal();
    
    const selectedEmployee = this.allEmployee.find((emp:any) => emp.empName === data.leadByEmployeName);
    const selectedProject = this.allProjects.find((project:any) => project.projectName === data.projectName);

    Object.keys(this.meetingForm.controls).forEach((key) => {
        if (key === 'meetingLeadByEmpId' && selectedEmployee) {
            this.meetingForm.get(key)?.setValue(selectedEmployee.empId);
        }else if(key === 'projectId' && selectedProject){
          this.meetingForm.get(key)?.setValue(selectedProject.clientProjectId);
        }else {
            this.meetingForm.get(key)?.setValue(data[key]);
        }
    });
  }

  updateMeeting(){
    let updatgedData = this.meetingForm.value
    this.meetingService.addUpdateProjectMeeting(updatgedData).subscribe((res:any)=>{
      console.log(res,"res");
      this.closeModal();
      this.meetingForm.reset();
      this.getAllMeetings();
    })
  }

}
