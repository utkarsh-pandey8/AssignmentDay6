import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-task1',
  templateUrl: './task1.component.html',
  styleUrls: ['./task1.component.css']
})
export class Task1Component implements OnInit {

  switch:number
  constructor()
  {
    this.switch = 4
  }

  public getSwitch()
  {
    return this.switch
  }
  ngOnInit(): void {
    
  }
}
