import { Component, OnInit } from '@angular/core';
import { Contact } from 'src/app/models/contact.model';
import { IconList } from 'src/app/models/icon-list.model';

@Component({
  selector: 'app-profile-contact',
  templateUrl: './profile-contact.component.html',
  styleUrls: ['./profile-contact.component.css']
})
export class ProfileContactComponent implements OnInit {

  constructor() {

    this.contactList = [
      { label: 'askarialireza373@gmail.com', logo: 'fa-at' },
      { label: '09393387784', logo: 'fa-mobile' },
      // { label: '021-44797792', logo: 'fa-phone' },
      { label: 'Tehran', logo: 'fa-map-marker-alt' },
    ];
  }

  contactList: IconList[];

  ngOnInit() {
  }
}
