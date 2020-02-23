import { Component, OnInit, Input } from '@angular/core';
import { Skill } from 'src/app/models/skill.model';

@Component({
  selector: 'app-tab-skills-item',
  templateUrl: './tab-skills-item.component.html',
  styleUrls: ['./tab-skills-item.component.css']
})
export class TabSkillsItemComponent implements OnInit {

  constructor() { }

  @Input() items: Skill[];

  ngOnInit() {
  }

  getStyle(value:number){
    let result: string = "max-width: " + value.toString() + "%";
  }

}
