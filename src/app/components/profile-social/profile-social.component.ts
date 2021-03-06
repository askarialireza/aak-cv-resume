import { Component, OnInit } from '@angular/core';
import { Social } from 'src/app/models/social.model';

@Component({
  selector: 'app-social',
  templateUrl: './profile-social.component.html',
  styleUrls: ['./profile-social.component.css']
})
export class ProfileSocialComponent implements OnInit {

  constructor() {

  }

  socialProfiels: Social[];

  ngOnInit() {
    this.socialProfiels = [
      { name: "صفحه گیت‌هاب", logo: "fa-github", class: "btn-github", url: "https://github.com/askarialireza" },
      { name: "صفحه توییتر", logo: "fa-twitter", class: "btn-twitter", url: "https://twitter.com/iraksaazerila" },
      { name: "صفحه لینکدین", logo: "fa-linkedin", class: "btn-linkedin", url: "https://www.linkedin.com/in/alireza-askari-8033691a3/" },
    ];
  }

}
