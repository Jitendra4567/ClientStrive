import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MeetingsService {

  constructor(private http:HttpClient) { }

  getAllMeetings(){
    return this.http.get('https://freeapi.miniprojectideas.com/api/ClientStrive/GetAllMeetings');
  }

  addUpdateProjectMeeting(data:any){
    return this.http.post('https://freeapi.miniprojectideas.com/api/ClientStrive/AddUpdateProjectMeeting',data);
  }

  deleteMeetingByMeetingId(id:Number){
    return this.http.delete('https://freeapi.miniprojectideas.com/api/ClientStrive/DeleteMeetingByMeetingId?meetingId='+id);
  }

}
