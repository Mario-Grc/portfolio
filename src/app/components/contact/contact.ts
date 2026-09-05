import { Component, inject, signal } from '@angular/core';
import { LanguageService } from '../../i18n/language.service';

@Component({
  selector: 'app-contact',
  imports: [],
  templateUrl: './contact.html',
  styleUrl: './contact.scss',
})
export class Contact {
  protected readonly language = inject(LanguageService);
  protected readonly email = 'mariogarciaabellan@gmail.com';
  protected readonly githubUrl = 'https://github.com/Mario-Grc';
  protected readonly linkedinUrl = 'https://www.linkedin.com/in/mario-garcia-abellan/';
  protected readonly emailCopied = signal(false);

  protected async copyEmail(): Promise<void> {
    await navigator.clipboard.writeText(this.email);
    this.emailCopied.set(true);
    setTimeout(() => this.emailCopied.set(false), 2000);
  }
}
