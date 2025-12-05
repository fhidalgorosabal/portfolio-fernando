import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

interface Skill {
  name: string;
  category: 'languages' | 'frontend' | 'backend' | 'database' | 'testing' | 'tools' | 'methodology';
  icon: string; // URL completa del icono SVG
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
    // Lenguajes de programación
    { name: 'HTML', category: 'languages', icon: this.getIconPath('html5') },
    { name: 'CSS', category: 'languages', icon: this.getIconPath('css') },
    { name: 'SCSS', category: 'languages', icon: this.getIconPath('sass') },
    { name: 'JavaScript', category: 'languages', icon: this.getIconPath('javascript') },
    { name: 'TypeScript', category: 'languages', icon: this.getIconPath('typescript') },
    { name: 'PHP', category: 'languages', icon: this.getIconPath('php') },
    { name: 'SQL', category: 'languages', icon: this.getIconPath('sql') },
    
    // Frontend
    { name: 'Angular', category: 'frontend', icon: this.getIconPath('angular') },
    { name: 'React', category: 'frontend', icon: this.getIconPath('react') },
    { name: 'Vite', category: 'frontend', icon: this.getIconPath('vite') },
    { name: 'Webpack', category: 'frontend', icon: this.getIconPath('webpack') },
    { name: 'Bootstrap', category: 'frontend', icon: this.getIconPath('bootstrap') },
    { name: 'Tailwind CSS', category: 'frontend', icon: this.getIconPath('tailwindcss') },
    
    // Backend
    { name: 'NestJS', category: 'backend', icon: this.getIconPath('nestjs') },
    { name: 'Node.js', category: 'backend', icon: this.getIconPath('nodejs') },
    { name: 'Express', category: 'backend', icon: this.getIconPath('express') },
    { name: 'Laravel', category: 'backend', icon: this.getIconPath('laravel') },
    
    // Bases de datos
    { name: 'Prisma', category: 'database', icon: this.getIconPath('prisma') },
    { name: 'PostgreSQL', category: 'database', icon: this.getIconPath('postgresql') },
    { name: 'MySQL', category: 'database', icon: this.getIconPath('mysql') },
    { name: 'SQLite', category: 'database', icon: this.getIconPath('sqlite') },
    
    // Testing
    { name: 'Jest', category: 'testing', icon: this.getIconPath('jest') },
    { name: 'Testing Library', category: 'testing', icon: this.getIconPath('testing-library') },
    { name: 'Karma', category: 'testing', icon: this.getIconPath('karma') },
    { name: 'Jasmine', category: 'testing', icon: this.getIconPath('jasmine') },
    
    // Herramientas
    { name: 'Postman', category: 'tools', icon: this.getIconPath('postman') },
    { name: 'Swagger', category: 'tools', icon: this.getIconPath('swagger') },
    { name: 'Figma', category: 'tools', icon: this.getIconPath('figma') },
    { name: 'Git', category: 'tools', icon: this.getIconPath('git') },
    { name: 'GitHub', category: 'tools', icon: this.getIconPath('github') },
    { name: 'GitLab', category: 'tools', icon: this.getIconPath('gitlab') },
    { name: 'Bitbucket', category: 'tools', icon: this.getIconPath('bitbucket') },
    
    // Metodologías
    { name: 'Scrum', category: 'methodology', icon: this.getIconPath('scrum') }
  ];

  getSkillsByCategory(category: string): Skill[] {
    return this.skills.filter(skill => skill.category === category);
  }

  getCategoryTitle(category: string): string {
    const titles: { [key: string]: string } = {
      'languages': 'Lenguajes de Programación',
      'frontend': 'Frontend',
      'backend': 'Backend',
      'database': 'Bases de Datos',
      'testing': 'Testing',
      'tools': 'Herramientas',
      'methodology': 'Metodologías'
    };
    return titles[category] || category;
  }
}

