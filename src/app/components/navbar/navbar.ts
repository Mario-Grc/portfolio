import { Component, signal } from '@angular/core';

type Language = 'es' | 'en';

@Component({
  selector: 'app-navbar',
  imports: [],
  templateUrl: './navbar.html',
  styleUrl: './navbar.scss',
})
export class Navbar {
  protected readonly menuOpen = signal(false);
  protected readonly selectedLanguage = signal<Language>('es');

  protected closeMenu(): void {
    this.menuOpen.set(false);
  }

  protected setLanguage(language: Language): void {
    this.selectedLanguage.set(language);
  }
}
