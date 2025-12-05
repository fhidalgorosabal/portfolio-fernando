import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

interface Project {
  title: string;
  description: string;
  image: string;
  technologies: string[];
  githubUrl?: string;
  liveUrl?: string;
}

@Component({
  selector: 'app-projects',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './projects.component.html',
  styleUrl: './projects.component.css'
})
export class ProjectsComponent {
  projects: Project[] = [
    {
      title: 'E-commerce Platform',
      description: 'Plataforma completa de comercio electrónico con carrito de compras, sistema de pagos y panel de administración.',
      image: 'https://via.placeholder.com/600x400',
      technologies: ['Angular', 'Node.js', 'MongoDB', 'Stripe'],
      githubUrl: '#',
      liveUrl: '#'
    },
    {
      title: 'Dashboard Analytics',
      description: 'Dashboard interactivo para visualización de datos con gráficos en tiempo real y exportación de reportes.',
      image: 'https://via.placeholder.com/600x400',
      technologies: ['React', 'TypeScript', 'D3.js', 'Express'],
      githubUrl: '#',
      liveUrl: '#'
    },
    {
      title: 'App de Gestión',
      description: 'Aplicación web para gestión de tareas y proyectos con colaboración en tiempo real y notificaciones.',
      image: 'https://via.placeholder.com/600x400',
      technologies: ['Vue.js', 'Firebase', 'TailwindCSS', 'PWA'],
      githubUrl: '#',
      liveUrl: '#'
    },
    {
      title: 'Portfolio Personal',
      description: 'Sitio web personal responsivo con sistema de temas y animaciones suaves.',
      image: 'https://via.placeholder.com/600x400',
      technologies: ['Angular', 'TailwindCSS', 'TypeScript'],
      githubUrl: '#',
      liveUrl: '#'
    }
  ];
}

