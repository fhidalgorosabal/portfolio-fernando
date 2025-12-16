export interface PersonalInfo {
  name: string;
  title: string;
  subtitle: string;
  description: string;
  avatar: string;
  email: string;
  phone: string;
  location: string;
  github: string;
  linkedin: string;
}

export interface Experience {
  title: string;
  company: string;
  period: string;
  description: string[];
  technologies: string[];
}

export interface Project {
  title: string;
  description: string;
  image: string;
  technologies: string[];
  githubUrl?: string;
  liveUrl?: string;
}

export interface Skill {
  name: string;
  icon: string;
}

export interface Education {
  degree: string;
  institution: string;
  period: string;
}

export interface PortfolioData {
  personalInfo: PersonalInfo;
  experiences: Experience[];
  projects: Project[];
  skills: Skill[];
  education: Education[];
}

const iconBasePath = '/assets/icons/';
const getIconPath = (iconName: string): string => `${iconBasePath}${iconName}.svg`;

export const portfolioData: PortfolioData = {
  personalInfo: {
    name: 'Fernando Hidalgo Rosabal',
    title: 'Desarrollador Full-Stack',
    subtitle: 'Desarrollador web full-stack con amplia experiencia en la creación de aplicaciones web modernas y escalables, utilizando tecnologías como Angular, React, NestJS y Laravel.',
    description: 'Desarrollador web full-stack con amplia experiencia en la creación de aplicaciones web modernas y escalables, utilizando tecnologías como Angular, React, NestJS y Laravel. Dominio de arquitecturas cliente-servidor, diseño de APIs RESTful e implementación de microservicios. Enfocado en la calidad del código, aplicando principios como SOLID, Clean Code y pruebas automatizadas. Desempeño colaborativo en equipos ágiles (Scrum), con perfil proactivo, adaptable a nuevas tecnologías y orientado a la generación continua de valor para el negocio.',
    avatar: '/assets/images/avatar.jpg',
    email: 'fhidalgorosabal@gmail.com',
    phone: '+55 (54) 98134-2407',
    location: 'Itupeva, São Paulo, Brasil',
    github: 'https://github.com/fhidalgorosabal',
    linkedin: 'https://www.linkedin.com/in/fernando-hidalgo-rosabal-64247a214/'
  },

  experiences: [
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
  ],

  projects: [
    {
      title: 'TranSoft',
      description: 'Sistema desarrollado en CodeIgniter 3.0.6, Bootstrap v2.3.2 y jQuery 1.9.1 como parte del proyecto de tesis de la carrera de Ingeniería en Ciencias Informáticas. Está diseñado para gestionar la información relacionada con el transporte.',
      image: '/assets/images/img-project-1.png',
      technologies: ['CodeIgniter', 'Bootstrap', 'jQuery'],
      githubUrl: 'https://github.com/fhidalgorosabal/transoft',
      liveUrl: 'EMPTY'
    },
    {
      title: 'FinanceApp',
      description: 'Aplicación web desarrollada en Angular 13.0.0 con NgPrime 13.1.0 (frontend) y Laravel 9.0.0 (backend). Es creada para la gestión financiera de manera eficiente, ya sea a nivel personal o para pequeñas empresas.',
      image: '/assets/images/img-project-2.png',
      technologies: ['Angular', 'NgPrime', 'Laravel'],
      githubUrl: 'https://github.com/fhidalgorosabal/frontend-finance-app',
      liveUrl: 'https://finance-app-fhr.vercel.app'
    },
    {
      title: 'MovieApp',
      description: 'Aplicación desarrollada en **React 18.3.1** que muestra un listado de las últimas películas del año. Utiliza la API de The Movie Database (TMDB).',
      image: '/assets/images/img-project-3.png',
      technologies: ['React', 'TypeScript', 'TailwindCSS'],
      githubUrl: 'https://github.com/fhidalgorosabal/movie-app',
      liveUrl: 'https://movie-app-fhr.vercel.app/'
    },
    {
      title: 'Portfolio Personal',
      description: 'Sitio web personal responsivo con sistema de temas y animaciones suaves.',
      image: 'https://via.placeholder.com/600x400',
      technologies: ['Angular', 'TailwindCSS', 'TypeScript'],
      githubUrl: '#',
      liveUrl: '#'
    }
  ],

  skills: [
    // Lenguajes
    { name: 'HTML', icon: getIconPath('html5') },
    { name: 'CSS', icon: getIconPath('css') },
    { name: 'SCSS', icon: getIconPath('sass') },
    { name: 'JavaScript', icon: getIconPath('javascript') },
    { name: 'TypeScript', icon: getIconPath('typescript') },
    { name: 'PHP', icon: getIconPath('php') },
    { name: 'SQL', icon: getIconPath('sql') },

    // Frontend
    { name: 'Angular', icon: getIconPath('angular') },
    { name: 'React', icon: getIconPath('react') },
    { name: 'Bootstrap', icon: getIconPath('bootstrap') },
    { name: 'Tailwind CSS', icon: getIconPath('tailwindcss') },
    { name: 'Vite', icon: getIconPath('vite') },
    { name: 'Webpack', icon: getIconPath('webpack') },

    // Backend
    { name: 'NestJS', icon: getIconPath('nestjs') },
    { name: 'Express', icon: getIconPath('express') },
    { name: 'Node.js', icon: getIconPath('nodejs') },
    { name: 'Laravel', icon: getIconPath('laravel') },

    // Bases de datos / ORM
    { name: 'PostgreSQL', icon: getIconPath('postgresql') },
    { name: 'MySQL', icon: getIconPath('mysql') },
    { name: 'SQLite', icon: getIconPath('sqlite') },
    { name: 'Prisma', icon: getIconPath('prisma') },

    // Testing
    { name: 'Jest', icon: getIconPath('jest') },
    { name: 'Karma', icon: getIconPath('karma') },
    { name: 'Jasmine', icon: getIconPath('jasmine') },
    { name: 'Testing Library', icon: getIconPath('testing-library') },

    // Control de versiones
    { name: 'Git', icon: getIconPath('git') },
    { name: 'GitHub', icon: getIconPath('github') },
    { name: 'GitLab', icon: getIconPath('gitlab') },
    { name: 'Bitbucket', icon: getIconPath('bitbucket') },

    // APIs & Documentación
    { name: 'Postman', icon: getIconPath('postman') },
    { name: 'Swagger', icon: getIconPath('swagger') },

    // Gestión
    { name: 'Jira', icon: getIconPath('jira') },
    { name: 'Confluence', icon: getIconPath('confluence') },

    // Diseño
    { name: 'Figma', icon: getIconPath('figma') },

    // Metodologías Ágiles
    { name: 'Scrum', icon: getIconPath('scrum') }
  ],

  education: [
    {
      degree: 'Ingeniería en Ciencias Informáticas',
      institution: 'Universidad de las Ciencias Informáticas (UCI)',
      period: 'Septiembre 2011 - Julio 2017'
    }
  ]
};
