import { DOCUMENT } from '@angular/common';
import { effect, Injectable, inject, signal, computed } from '@angular/core';
import { en, es, Lang, translations } from './translations';

const LANGUAGE_STORAGE_KEY = 'portfolio-language';

@Injectable({ providedIn: 'root' })
export class LanguageService {
  private readonly document = inject(DOCUMENT);
  readonly lang = signal<Lang>(this.getInitialLanguage());
  readonly t = computed(() => translations[this.lang()]);

  constructor() {
    effect(() => {
      this.document.documentElement.lang = this.lang();
    });
  }

  setLanguage(language: Lang): void {
    this.lang.set(language);
    localStorage.setItem(LANGUAGE_STORAGE_KEY, language);
  }

  private getInitialLanguage(): Lang {
    const storedLanguage = localStorage.getItem(LANGUAGE_STORAGE_KEY);

    return storedLanguage === 'en' || storedLanguage === 'es' ? storedLanguage : 'es';
  }
}
