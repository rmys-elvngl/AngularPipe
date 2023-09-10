import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class HelperService {

  title:string = "Title"
  constructor() { }
  upper(text:string){
    return text.toUpperCase();
  }
  //canlıda bu metot çalışsın
  sendSms(text:string,phone:string){

    console.log("gerçek sms gönderildi")
  }
}
