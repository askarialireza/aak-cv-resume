import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  constructor() { 
    this.name = "علیرضا عسکری";
    this.job = "برنامه نویس تحت وب";
   }

  public name: string;
  public job: string;

  ngOnInit() {
  }

}
