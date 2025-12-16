import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PortfolioDataService } from '../../services/portfolio-data.service';
import { Experience } from '../../data/portfolio.data';

@Component({
  selector: 'app-experience',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './experience.component.html',
  styleUrl: './experience.component.css'
})
export class ExperienceComponent implements OnInit {
  experiences: Experience[] = [];

  constructor(private portfolioService: PortfolioDataService) {}

  ngOnInit() {
    this.experiences = this.portfolioService.getExperiences();
  }
}

