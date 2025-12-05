import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

interface Experience {
  title: string;
  company: string;
  period: string;
  description: string[];
  technologies: string[];
}

@Component({
  selector: 'app-experience',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './experience.component.html',
  styleUrl: './experience.component.css'
})
export class ExperienceComponent {
  experiences: Experience[] = [
    {
      title: 'Desarrollador Frontend',
      company: 'Defontana Chile',
      period: 'Julio 2025 - Actualidad',
      description: [
        'Desarrollador de Software Frontend (Angular), colaborando en el equipo que desarrolla Zenda, un software especializado en Gestión de Recursos Humanos.'
      ],
      technologies: ['Angular', 'TypeScript', 'Tailwind', 'Angular Material', 'Amazon Web Services', 'Figma', 'Jira', 'Bitbucket']
    },
    {
      title: 'Desarrollador Fullstack Freelance',
      company: 'Freelancer',
      period: 'Febrero 2024 - Junio 2025',
      description: [
        'Desarrollador de software en Angular, React, Laravel y NestJS. Diseño y desarrollo de aplicaciones web escalables y sistemas orientados a servicios.'
      ],
      technologies: ['Angular', 'React', 'Laravel', 'NestJS', 'GitHub']
    },
    {
      title: 'Desarrollador Frontend',
      company: 'CREALOGIX - Peoplewalking',
      period: 'Marzo 2021 - Diciembre 2023',
      description: [
        'Desarrollador de software front-end (Angular) en CREALOGIX, líder mundial en tecnología de banca digital, y en Peoplewalking, empresa especializada en soluciones de software empresarial.'
      ],
      technologies: ['Angular', 'TypeScript', 'Tailwind', 'Ionic Framework', 'Apache Cordova', 'Figma', 'Jira', 'GitLab']
    },
    {
      title: 'Especialista en Ciencias Informáticas',
      company: 'DESOFT',
      period: 'Febrero 2020 - Diciembre 2023',
      description: [
        'Desarrollo y soporte de soluciones de software, participando en todo el ciclo de vida de producción y comercialización. Implementación de aplicaciones web utilizando Laravel y Angular, instalación y configuración de sistemas operativos y software, asegurando eficiencia y estabilidad.'
      ],
      technologies: ['Laravel', 'Angular', 'Bootstrap', 'jQuery', 'PostgreSQL', 'GitHub']
    },
    {
      title: 'Especialista en Informática',
      company: 'Electromedicina Granma',
      period: 'Septiembre 2017 - Diciembre 2020',
      description: [
        'Especialista C en Ciencias de la Computación y Administración de Redes en el Centro de Tecnología Médica.'
      ],
      technologies: ['Administración de Redes', 'Soporte Técnico', 'Mantenimiento de Hardware y Software', 'PHP', 'HTML', 'JavaScript', 'GitHub']
    }
  ];
}

