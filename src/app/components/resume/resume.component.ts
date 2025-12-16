import { Component, OnInit } from '@angular/core';
import { CommonModule, Location } from '@angular/common';
import { Router } from '@angular/router';
import { PortfolioDataService } from '../../services/portfolio-data.service';
import { PortfolioData } from '../../data/portfolio.data';

@Component({
  selector: 'app-resume',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './resume.component.html',
  styleUrl: './resume.component.css'
})
export class ResumeComponent implements OnInit {
  data!: PortfolioData;

  constructor(
    private portfolioService: PortfolioDataService,
    private location: Location,
    private router: Router
  ) {}

  ngOnInit() {
    this.data = this.portfolioService.getAllData();
  }

  goBack() {
    this.router.navigate(['/']);
  }

  downloadPDF() {
    window.print();
  }
}
