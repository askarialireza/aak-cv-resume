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
      {title:"Resume",tootltip:"Download Resume",url:"../../../assets/Alireza Askari - Resume.pdf",logo:"fas fa-arrow-down"},
      {title:"Telegram",tootltip:"Telegram Account",url:"#",logo:"fab fa-telegram"},
      {title:"Twitter",tootltip:"Follow me on Twitter",url:"#",logo:"fab fa-twitter"},
      {title:"Instagram",tootltip:"Follow me on Instagram",url:"#",logo:"fab fa-instagram"},
    ];
   }

  navList : Navbar[];

  ngOnInit() {
  }

}
