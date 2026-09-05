import { TestBed } from '@angular/core/testing';
import { LanguageService } from './language.service';

describe('LanguageService', () => {
  let service: LanguageService;

  beforeEach(() => {
    localStorage.clear();
    TestBed.configureTestingModule({});
    service = TestBed.inject(LanguageService);
  });

  it('starts in Spanish when no language is stored', () => {
    expect(service.lang()).toBe('es');
    expect(service.t().nav.home).toBe('Inicio');
  });

  it('changes and persists the selected language', () => {
    service.setLanguage('en');

    expect(service.lang()).toBe('en');
    expect(service.t().nav.home).toBe('Home');
    expect(localStorage.getItem('portfolio-language')).toBe('en');
    TestBed.tick();
    expect(document.documentElement.lang).toBe('en');
  });

  it('falls back to Spanish for an invalid stored language', () => {
    localStorage.setItem('portfolio-language', 'fr');

    TestBed.resetTestingModule();
    TestBed.configureTestingModule({});
    const newService = TestBed.inject(LanguageService);

    expect(newService.lang()).toBe('es');
  });
});
