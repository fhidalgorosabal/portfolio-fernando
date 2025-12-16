import { Component } from '@angular/core';
import { NavbarComponent } from '../navbar/navbar.component';
import { HeroComponent } from '../hero/hero.component';
import { ExperienceComponent } from '../experience/experience.component';
import { ProjectsComponent } from '../projects/projects.component';
import { SkillsComponent } from '../skills/skills.component';
import { ContactComponent } from '../contact/contact.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    NavbarComponent,
    HeroComponent,
    ExperienceComponent,
    ProjectsComponent,
    SkillsComponent,
    ContactComponent
  ],
  template: `
    <app-navbar />
    <app-hero />
    <app-experience />
    <app-projects />
    <app-skills />
    <app-contact />
  `
})
export class HomeComponent {}
