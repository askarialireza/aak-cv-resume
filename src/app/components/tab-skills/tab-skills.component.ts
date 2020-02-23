import { Component, OnInit } from '@angular/core';
import { Skill } from 'src/app/models/skill.model';

@Component({
  selector: 'app-tab-skills',
  templateUrl: './tab-skills.component.html',
  styleUrls: ['./tab-skills.component.css']
})
export class TabSkillsComponent implements OnInit {

  constructor() { 

    this.backEndItems = [
      {title:"ASP.NET MVC Core",ability:"90"},
      {title:"ASP.NET MVC 5",ability:"100"},
      {title:"Entity Framework Core",ability:"90"},
      {title:"Entity Framework 6",ability:"100"},
      {title:"Windows Presentation Framework",ability:"80"},
      {title:"Git",ability:"80"},
    ];

    this.frontEndItems = [
      {title:"Angular",ability:"90"},
      {title:"Bootstrap",ability:"100"},
      {title:"Vue.js",ability:"50"},
      {title:"jQuery",ability:"80"},
      {title:"Javascript",ability:"80"},
      {title:"HTML 5 & CSS 3",ability:"100"},
    ];

  }

  public frontEndItems : Skill[];

  public backEndItems : Skill[];


  ngOnInit() {
  }

}
