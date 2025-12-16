import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import { PortfolioDataService } from '../../services/portfolio-data.service';
import { PersonalInfo } from '../../data/portfolio.data';

@Component({
  selector: 'app-hero',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './hero.component.html',
  styleUrl: './hero.component.css'
})
export class HeroComponent implements OnInit {
  personalInfo!: PersonalInfo;

  constructor(private portfolioService: PortfolioDataService) {}

  ngOnInit() {
    this.personalInfo = this.portfolioService.getPersonalInfo();
  }

  scrollToSection(sectionId: string): void {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  }
}
