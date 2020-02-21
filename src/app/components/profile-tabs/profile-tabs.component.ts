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
      {title:"Studio",url:"#studio",icon:"camera"},
      {title:"Favorite",url:"#favorite",icon:"favorite"},
      {title:"Resume",url:"#resume",icon:"format_list_bulleted"},
      {title:"Contact",url:"#contact",icon:"chat"},
    ];
   }

  ngOnInit() {
  }

}
