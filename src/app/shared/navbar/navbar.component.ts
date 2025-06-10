// navbar.component.ts
import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ScrollService } from '../../services/scroll.service';
import { AssetService } from '../../services/assets.service';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './navbar.component.html'
})
export class NavbarComponent {
  isMenuOpen = false;
  
  navItems = [
    { name: 'About', link: 'about' },
    { name: 'Expertise', link: 'expertise' },
    { name: 'Experience', link: 'experience' },
    { name: 'Projects', link: 'projects' },
    { name: 'Contact', link: 'contact' }
  ];
  constructor(private scrollService: ScrollService, private assetService: AssetService) {}

  toggleMenu() {
    this.isMenuOpen = !this.isMenuOpen;
  }
  scrollTo(elementId: string): void {
    this.scrollService.scrollToElement(elementId);
    this.isMenuOpen = false;
  }
  getCV(): string {
    return this.assetService.getCV();
  }
}