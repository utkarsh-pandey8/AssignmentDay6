import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-task3',
  templateUrl: './task3.component.html',
  styleUrls: ['./task3.component.css']
})
export class Task3Component implements OnInit {

  tData:boolean
  obj:object
  constructor()
  {
    this.tData = true
    this.obj = {
      name : 'Utkarsh',
      age : 22,
      company : 'Deloitte'
    }
  }

 ngOnInit(): void {
   
 }
}
