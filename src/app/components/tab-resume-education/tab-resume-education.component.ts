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
      {startDate:"2013",endDate:"2017",academy:"دانشگاه آزاد اسلامی واحد کرج", title:"کارشناسی",description:"مهندسی کامپیوتر گرایش نرم افزار",academyUrl:"http://www.kiau.ac.ir/fa"},
      {startDate:"2016",endDate:"2017",academy:"مرکز آموزش‌های تخصصی سماتک", title:"برنامه‌نویسی",description:"C# Programming",academyUrl:"http://www.sematec-co.com/"},
      {startDate:"2017",endDate:"2018",academy:"مرکز آموزش‌های تخصصی سماتک", title:"برنامه‌نویسی",description:"Entity Framework 6.0",academyUrl:"http://www.sematec-co.com/"},
      {startDate:"2018",academy:"مرکز آموزش‌های تخصصی سماتک", title:"برنامه‌نویسی",description:"ASP.NET MVC 5.0",academyUrl:"http://www.sematec-co.com/"},
    ];

 }

educationList : Education[] ;

  ngOnInit() {
  }

}
