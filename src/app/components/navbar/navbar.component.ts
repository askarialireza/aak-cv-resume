import { Component, OnInit } from '@angular/core';
import { Navbar } from 'src/app/models/navbar.model';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  constructor() { 
    this.navList = [
      {title:"رزومه",tootltip:"دریافت رزومه",url:"../../../assets/Alireza Askari - Resume.pdf",logo:"fas fa-arrow-down"},
      {title:"تلگرام",tootltip:"حساب من در تلگرام",url:"https://t.me/askarialireza",logo:"fab fa-telegram"},
      {title:"توییتر",tootltip:"صفحه من در توییتر",url:"https://twitter.com/iraksaazerila",logo:"fab fa-twitter"},
      {title:"اینستاگرام",tootltip:"صفحه من در اینستاگرام",url:"https://www.instagram.com/aliireeeezaa/",logo:"fab fa-instagram"},
    ];
   }

  navList : Navbar[];

  ngOnInit() {
  }

}
