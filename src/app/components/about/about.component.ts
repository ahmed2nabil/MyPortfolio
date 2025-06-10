// about.component.ts
import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AssetService } from '../../services/assets.service';

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './about.component.html'
})
export class AboutComponent {
  technologies = [
    'Angular', 
    'Tailwind CSS', 
    'PrimeNG', 
    'AG Grid',
    'NestJS',
    'Docker',
    'Redis',
    'RabbitMQ',
    'MongoDB',
    'PostgreSQL'
  ];
  profileImage: string;
  constructor(private assetService: AssetService) {
    this.profileImage = this.assetService.getProfileImage();
  }
}