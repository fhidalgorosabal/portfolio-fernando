import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

interface Skill {
  name: string;
  icon: string;
}

@Component({
  selector: 'app-skills',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './skills.component.html',
  styleUrl: './skills.component.css'
})
export class SkillsComponent {
  private readonly iconBasePath = '/assets/icons/';

  private getIconPath(iconName: string): string {
    return `${this.iconBasePath}${iconName}.svg`;
  }

  skills: Skill[] = [

  // Lenguajes
  { name: 'HTML', icon: this.getIconPath('html5') },
  { name: 'CSS', icon: this.getIconPath('css') },
  { name: 'SCSS', icon: this.getIconPath('sass') },
  { name: 'JavaScript', icon: this.getIconPath('javascript') },
  { name: 'TypeScript', icon: this.getIconPath('typescript') },
  { name: 'PHP', icon: this.getIconPath('php') },
  { name: 'SQL', icon: this.getIconPath('sql') },

  // Frontend
  { name: 'Angular', icon: this.getIconPath('angular') },
  { name: 'React', icon: this.getIconPath('react') },
  { name: 'Bootstrap', icon: this.getIconPath('bootstrap') },
  { name: 'Tailwind CSS', icon: this.getIconPath('tailwindcss') },
  { name: 'Vite', icon: this.getIconPath('vite') },
  { name: 'Webpack', icon: this.getIconPath('webpack') },

  // Backend
  { name: 'NestJS', icon: this.getIconPath('nestjs') },
  { name: 'Express', icon: this.getIconPath('express') },
  { name: 'Node.js', icon: this.getIconPath('nodejs') },
  { name: 'Laravel', icon: this.getIconPath('laravel') },

  // Bases de datos / ORM
  { name: 'PostgreSQL', icon: this.getIconPath('postgresql') },
  { name: 'MySQL', icon: this.getIconPath('mysql') },
  { name: 'SQLite', icon: this.getIconPath('sqlite') },
  { name: 'Prisma', icon: this.getIconPath('prisma') },

  // Testing
  { name: 'Jest', icon: this.getIconPath('jest') },
  { name: 'Karma', icon: this.getIconPath('karma') },
  { name: 'Jasmine', icon: this.getIconPath('jasmine') },
  { name: 'Testing Library', icon: this.getIconPath('testing-library') },

  // Control de versiones
  { name: 'Git', icon: this.getIconPath('git') },
  { name: 'GitHub', icon: this.getIconPath('github') },
  { name: 'GitLab', icon: this.getIconPath('gitlab') },
  { name: 'Bitbucket', icon: this.getIconPath('bitbucket') },

  // APIs & Documentación
  { name: 'Postman', icon: this.getIconPath('postman') },
  { name: 'Swagger', icon: this.getIconPath('swagger') },

  // Gestión
  { name: 'Jira', icon: this.getIconPath('jira') },
  { name: 'Confluence', icon: this.getIconPath('confluence') },

  // Diseño
  { name: 'Figma', icon: this.getIconPath('figma') },

  // Metodologías Ágiles
  { name: 'Scrum', icon: this.getIconPath('scrum') },

];



}

