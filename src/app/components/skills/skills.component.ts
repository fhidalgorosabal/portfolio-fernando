import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PortfolioDataService } from '../../services/portfolio-data.service';
import { Skill } from '../../data/portfolio.data';

@Component({
  selector: 'app-skills',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './skills.component.html',
  styleUrl: './skills.component.css'
})
export class SkillsComponent implements OnInit {
  skills: Skill[] = [];

  constructor(private portfolioService: PortfolioDataService) {}

  ngOnInit() {
    this.skills = this.portfolioService.getSkills();
  }
}

