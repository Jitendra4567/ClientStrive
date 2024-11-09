import * as bootstrap from 'bootstrap';

import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

import { PaymentService } from 'src/app/services/payment.service';
import { ProjectsService } from 'src/app/services/projects.service';

@Component({
  selector: 'app-payment',
  templateUrl: './payment.component.html',
  styleUrls: ['./payment.component.css']
})
export class PaymentComponent implements OnInit {

  payments:any;
  allProjects:any;
  paymentForm!:FormGroup;

  @ViewChild('modalElement') exampleModalRef!: ElementRef;
  modalInstance!: bootstrap.Modal;

  constructor(private paymentService:PaymentService,
    private projectService:ProjectsService,
    private fb:FormBuilder
  ) { }

  ngOnInit(): void {
    this.getAllPayments();
    this.getAllClientProjects();

    this.paymentForm = this.fb.group({
      projectPaymentId: 0,
      projectId: 0,
      paymentDate: [],
      paymentMode: [],
      amount: 0,
      naration: []
    })

  }

  save(){
    let data = this.paymentForm.value;
    this.paymentService.addUpdatePayment(data).subscribe((res:any)=>{
      this.closeModal();
      this.paymentForm.reset();
      this.getAllPayments();
    })
  }

  getAllPayments(){
    this.paymentService.getAllPayments().subscribe((res:any)=>{
      this.payments = res.data;
    })
  }

  deletePayments(id:number){
    this.paymentService.deletePaymentByPaymentId(id).subscribe((res:any)=>{
      this.getAllPayments();
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

  getAllClientProjects(){
    this.projectService.getAllClientProjects().subscribe((res:any)=>{
      this.allProjects = res.data;
    })
  }

  editPayment(data:any){
    this.openModal();
    Object.keys(this.paymentForm.controls).forEach((key)=>{
      this.paymentForm.get(key)?.setValue(data[key])
    })
  }

  update(){
    let data = this.paymentForm.value;
    this.paymentService.addUpdatePayment(data).subscribe((res:any)=>{
      this.closeModal();
      this.paymentForm.reset();
      this.getAllPayments();
    })
  }

}
