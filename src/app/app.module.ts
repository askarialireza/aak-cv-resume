import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { FooterComponent } from './components/footer/footer.component';
import { HeaderComponent } from './components/header/header.component';
import { ProfileComponent } from './components/profile/profile.component';
import { BiographyComponent } from './components/biography/biography.component';
import { ProfilePictureComponent } from './components/profile-picture/profile-picture.component';
import { MessageComponent } from './components/message/message.component';
import { ProfileTabsComponent } from './components/profile-tabs/profile-tabs.component';


@NgModule({
  declarations: [
    AppComponent,
    BiographyComponent,
    NavbarComponent,
    FooterComponent,
    ProfilePictureComponent,
    HeaderComponent,
    ProfileComponent,
    MessageComponent,
    ProfileTabsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
