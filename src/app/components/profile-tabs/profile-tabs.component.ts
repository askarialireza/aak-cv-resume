import { Component, OnInit } from '@angular/core';
import { ProfileTab } from '../../models/profile-tab.model';

@Component({
  selector: 'app-profile-tabs',
  templateUrl: './profile-tabs.component.html',
  styleUrls: ['./profile-tabs.component.css']
})
export class ProfileTabsComponent implements OnInit {

  profileTabs: ProfileTab[];

  constructor() { 

    this.profileTabs = [
      {title:"رزومه",url:"#resume",icon:"fas fa-list-ul",class:"tab-resume"},
      {title:"مهارت‌ها",url:"#skills",icon:"fas fa-code",class:"tab-skills"},
      {title:"گواهینامه‌ها",url:"#certificate",icon:"fas fa-certificate",class:"tab-certificate"},
      // {title:"تماس",url:"#contact",icon:"chat",class:"tab-contact"},
      {title:"پروژه ها",url:"#work",icon:"fas fa-briefcase",class:"tab-work"}
    ];
   }

  ngOnInit() {
  }

}
