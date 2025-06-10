// experience.component.ts
import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TabViewModule } from 'primeng/tabview';

@Component({
  selector: 'app-experience',
  standalone: true,
  imports: [CommonModule, TabViewModule],
  templateUrl: './experience.component.html'
})
export class ExperienceComponent {

}