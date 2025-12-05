import { Injectable, signal, effect } from '@angular/core';

export type Theme = 'light' | 'dark';

@Injectable({
  providedIn: 'root'
})
export class ThemeService {
  private readonly THEME_KEY = 'portfolio-theme';
  private readonly themeSignal = signal<Theme>('light');

  public readonly theme = this.themeSignal.asReadonly();

  constructor() {
    // Inicializar tema
    const initialTheme = this.getInitialTheme();
    this.themeSignal.set(initialTheme);
    
    // Aplicar tema inicial inmediatamente
    if (typeof document !== 'undefined') {
      this.applyTheme(initialTheme);
    }

    // Efecto para aplicar tema cuando cambie
    effect(() => {
      const currentTheme = this.themeSignal();
      if (typeof document !== 'undefined') {
        this.applyTheme(currentTheme);
        if (typeof localStorage !== 'undefined') {
          localStorage.setItem(this.THEME_KEY, currentTheme);
        }
      }
    });
  }

  toggleTheme(): void {
    const currentTheme = this.themeSignal();
    const newTheme = currentTheme === 'light' ? 'dark' : 'light';
    console.log('Toggling theme from', currentTheme, 'to', newTheme);
    this.themeSignal.set(newTheme);
    // Aplicar inmediatamente para asegurar que funcione
    this.applyTheme(newTheme);
  }

  setTheme(theme: Theme): void {
    this.themeSignal.set(theme);
  }

  private getInitialTheme(): Theme {
    if (typeof window === 'undefined' || typeof localStorage === 'undefined') {
      return 'light';
    }
    
    const savedTheme = localStorage.getItem(this.THEME_KEY) as Theme;
    if (savedTheme === 'light' || savedTheme === 'dark') {
      return savedTheme;
    }
    
    // Detectar preferencia del sistema
    if (window.matchMedia) {
      return window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
    }
    
    return 'light';
  }

  private applyTheme(theme: Theme): void {
    if (typeof document === 'undefined') {
      return;
    }
    
    const html = document.documentElement;
    const body = document.body;
    
    if (theme === 'dark') {
      html.classList.add('dark');
      body.classList.add('dark');
      console.log('Applied dark theme');
    } else {
      html.classList.remove('dark');
      body.classList.remove('dark');
      console.log('Applied light theme');
    }
    
    // Verificar que se aplicó correctamente
    console.log('HTML classes:', html.className);
    console.log('Body classes:', body.className);
    
    // Forzar reflow para asegurar que los estilos se apliquen
    void html.offsetHeight;
  }
}

