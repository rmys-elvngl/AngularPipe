import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class Helper2Service {

  title:string = "Title"
  constructor() { }
  upper(text:string){
    return text.toUpperCase() + "daha hızlı";
  }
  //development esnasında bu metot çalışsın
  sendSms(text:string,phone:string){
    console.log("sahte sms gönderildi")
  }
}
