import { Component, OnInit } from '@angular/core';
import { Education } from 'src/app/models/education.model';

@Component({
  selector: 'app-tab-resume-education',
  templateUrl: './tab-resume-education.component.html',
  styleUrls: ['./tab-resume-education.component.css']
})
export class TabResumeEducationComponent implements OnInit {

  constructor() {

    this.educationList = [
      {startDate:"2013",endDate:"2017",academy:"Karaj Islamic Azad University", title:"Bachelor",description:"Computer Software Engineering"},
      {startDate:"2016",endDate:"2017",academy:"SEMATEC CO.", title:"Programming",description:"C# Programming"},
      {startDate:"2017",endDate:"2018",academy:"SEMATEC CO.", title:"Programming",description:"Entity Framework 6.0"},
      {startDate:"2018",academy:"SEMATEC CO.", title:"Programming",description:"ASP.NET MVC 5.0"},
    ];

 }

educationList : Education[] ;

  ngOnInit() {
  }

}
