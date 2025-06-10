// src/app/services/asset.service.ts
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AssetService {
  // Base paths
  private readonly basePath = 'assets';
  private readonly imagePath = `${this.basePath}/images`;
  private readonly projectsPath = `${this.basePath}/projects`;
  private readonly cvPath = `${this.basePath}/cv`;

  constructor() {}

  // Profile image
  getProfileImage(): string {
    return `${this.imagePath}/ahmed.jpeg`;
  }

  // Project images
  getProjectImage(name: string, extension: string): string {
    return `${this.projectsPath}/${name}.${extension}`;
  }

  // CV
  getCV(): string {
    return `${this.cvPath}/Ahmed_Nabil_CV.pdf`;
  }
}