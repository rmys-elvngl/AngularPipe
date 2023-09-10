import { Component, OnInit } from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';
import { HelperService } from 'src/app/services/helper.service';

@Component({
  selector: 'app-first',
  templateUrl: './first.component.html',
  styleUrls: ['./first.component.css']
})
export class FirstComponent implements OnInit{
  constructor(private helperS:HelperService,private title:Title,private meta:Meta){
//private tanımlandığında sadece bu ts dosyasında kullanabilirim
  }
  ngOnInit(): void {
    console.log(this.helperS.upper("angular (first)"))
  //   this.title.setTitle("Angular First Component")
  //   this.meta.addTag({name:"author",content:"mss muhendis"});
    this.helperS.sendSms("mesaj","123 123 12 34")
  }
  change(){
    this.helperS.title = "Component-First"
  }
}
