import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-task2',
  templateUrl: './task2.component.html',
  styleUrls: ['./task2.component.css']
})
export class Task2Component implements OnInit {

  courses:string[]
  trainees:any[]

  colors:string
  backgroundColor:string
  fontSize:string

  constructor()
  {
    this.colors= 'brown'
    this.backgroundColor = 'green'
    this.fontSize = '30px'

    this.courses = ["angular", "react", "next", "tailwind"]

    this.trainees = [
      {
        fName : 'Utkarsh',
        lName : `Pandey`,
        age : 22
      },
      {
        fName : 'Ravi',
        lName : `Ghosh`,
        age : 21
      },
      {
        fName : 'John',
        lName : `Doe`,
        age : 23
      }
    ]
  }

  public getTrainees()
  {
    return this.trainees
  }
  
  ngOnInit(): void {
    
  }
}
