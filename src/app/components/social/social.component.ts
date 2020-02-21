import { Component, OnInit } from '@angular/core';
import { Social } from 'src/app/models/social.model';

@Component({
  selector: 'app-social',
  templateUrl: './social.component.html',
  styleUrls: ['./social.component.css']
})
export class SocialComponent implements OnInit {

  constructor() {

  }

  socialProfiels: Social[];

  ngOnInit() {
    this.socialProfiels = [
      { name: "Github", logo: "fa-github", class: "btn-github", url: "https://github.com/askarialireza" },
      { name: "Twitter", logo: "fa-twitter", class: "btn-twitter", url: "https://twitter.com/iraksaazerila" },
      { name: "Linkedin", logo: "fa-linkedin", class: "btn-linkedin", url: "https://www.linkedin.com/in/alireza-askari-8033691a3/" },
    ];
  }

}
