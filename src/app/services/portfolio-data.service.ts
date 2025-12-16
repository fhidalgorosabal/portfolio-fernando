import { Injectable } from '@angular/core';
import { portfolioData, PortfolioData } from '../data/portfolio.data';

@Injectable({
  providedIn: 'root'
})
export class PortfolioDataService {
  private data: PortfolioData = portfolioData;

  getPersonalInfo() {
    return this.data.personalInfo;
  }

  getExperiences() {
    return this.data.experiences;
  }

  getProjects() {
    return this.data.projects;
  }

  getSkills() {
    return this.data.skills;
  }

  getEducation() {
    return this.data.education;
  }

  getAllData() {
    return this.data;
  }
}
