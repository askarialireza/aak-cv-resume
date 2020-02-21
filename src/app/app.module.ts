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
import { SocialComponent } from './components/social/social.component';
import { ProfileAboutComponent } from './components/profile-about/profile-about.component';
import { ProfileDescriptionComponent } from './components/profile-description/profile-description.component';
import { ProfileContactComponent } from './components/profile-contact/profile-contact.component';
import { ProfileTabContentComponent } from './components/profile-tab-content/profile-tab-content.component';
import { TabResumeComponent } from './components/tab-resume/tab-resume.component';
import { TabResumeEducationComponent } from './components/tab-resume-education/tab-resume-education.component';
import { TabResumeExperienceComponent } from './components/tab-resume-experience/tab-resume-experience.component';


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
    ProfileTabsComponent,
    SocialComponent,
    ProfileAboutComponent,
    ProfileDescriptionComponent,
    ProfileContactComponent,
    ProfileTabContentComponent,
    TabResumeComponent,
    TabResumeEducationComponent,
    TabResumeExperienceComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
