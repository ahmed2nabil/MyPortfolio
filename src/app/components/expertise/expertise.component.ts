// expertise.component.ts
import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-expertise',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './expertise.component.html'
})
export class ExpertiseComponent {
  frontendTech = ['Angular', 'TypeScript', 'Tailwind CSS', 'SCSS', 'PrimeNG', 'AG Grid', 'RxJS'];
  backendTech = ['NestJS', 'Node.js', 'Express', 'MongoDB', 'PostgreSQL', 'Redis', 'RabbitMQ'];
  devopsTech = ['Docker', 'CI/CD', 'Git', 'GitHub Actions', 'AWS', 'Nginx'];
}