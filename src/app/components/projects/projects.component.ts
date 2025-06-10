// projects.component.ts
import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AssetService } from '../../services/assets.service';

@Component({
  selector: 'app-projects',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './projects.component.html'
})
export class ProjectsComponent {
  constructor(private assetService: AssetService) {}


  getProjectImage(name: string, extension: string): string {
    return this.assetService.getProjectImage(name, extension);
  }
}