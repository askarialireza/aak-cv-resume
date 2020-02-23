import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { FooterComponent } from './components/footer/footer.component';
import { HeaderComponent } from './components/header/header.component';
import { ProfileComponent } from './components/profile/profile.component';
import { ProfileTabsComponent } from './components/profile-tabs/profile-tabs.component';
import { ProfileAboutComponent } from './components/profile-about/profile-about.component';
import { ProfileContentComponent } from './components/profile-content/profile-content.component';
import { ProfileContactComponent } from './components/profile-contact/profile-contact.component';
import { ProfileSocialComponent } from './components/profile-social/profile-social.component';
import { ProfilePictureComponent } from './components/profile-picture/profile-picture.component';
import { ProfileDescriptionComponent } from './components/profile-description/profile-description.component';
import { ProfileTabContentComponent } from './components/profile-tab-content/profile-tab-content.component';
import { TabContactComponent } from './components/tab-contact/tab-contact.component';
import { TabSkillsComponent } from './components/tab-skills/tab-skills.component';
import { TabSkillsItemComponent } from './components/tab-skills-item/tab-skills-item.component';
import { TabResumeComponent } from './components/tab-resume/tab-resume.component';
import { TabResumeEducationComponent } from './components/tab-resume-education/tab-resume-education.component';
import { TabResumeExperienceComponent } from './components/tab-resume-experience/tab-resume-experience.component';


@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    FooterComponent,
    HeaderComponent,
    ProfileComponent,
    ProfileTabsComponent,
    ProfileAboutComponent,
    ProfileSocialComponent,
    ProfilePictureComponent,
    ProfileContentComponent,
    ProfileContactComponent,
    ProfileTabContentComponent,
    ProfileDescriptionComponent,
    TabResumeComponent,
    TabContactComponent,
    TabResumeEducationComponent,
    TabResumeExperienceComponent,
    TabSkillsComponent,
    TabSkillsItemComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
