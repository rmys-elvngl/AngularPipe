import { Component, OnInit } from '@angular/core';
import { HelperService } from 'src/app/services/helper.service';

@Component({
  selector: 'app-second',
  templateUrl: './second.component.html',
  styleUrls: ['./second.component.css']
})
export class SecondComponent implements OnInit{
  constructor(private helperS:HelperService){

  }
  
  ngOnInit(): void {
    console.log(this.helperS.upper("AngUlar (second)"))
  }

  show(){
    console.log(this.helperS.title)
  }
}
