import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PaymentService {

  constructor(private http:HttpClient) { }

  getAllPayments(){
    return this.http.get('https://freeapi.miniprojectideas.com/api/ClientStrive/GetAllPayments');
  }

  deletePaymentByPaymentId(id:number){
    return this.http.delete('https://freeapi.miniprojectideas.com/api/ClientStrive/DeletePaymentByPaymentId?paymentId='+id);
  }

  addUpdatePayment(data:any){
    return this.http.post('https://freeapi.miniprojectideas.com/api/ClientStrive/AddUpdatePayment',data);
  }

}
