import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.css'
})
export class ContactComponent {
  contactForm = {
    name: '',
    email: '',
    message: ''
  };

  onSubmit(): void {
    // Aquí puedes agregar la lógica para enviar el formulario
    console.log('Form submitted:', this.contactForm);
    alert('¡Gracias por tu mensaje! Te contactaré pronto.');
    this.contactForm = { name: '', email: '', message: '' };
  }
}

