import { Component, inject } from '@angular/core';
import { LanguageService } from '../../i18n/language.service';

type IssueDateKey = keyof typeof import('../../i18n/translations').es.education.issueDates;

interface Certification {
  title: string;
  code: string;
  issueDateKey: IssueDateKey;
  pdfUrl: string;
}

@Component({
  selector: 'app-education',
  imports: [],
  templateUrl: './education.html',
  styleUrl: './education.scss',
})
export class Education {
  protected readonly language = inject(LanguageService);
  protected readonly certifications: Certification[] = [
    {
      title: 'Red Hat System Administration II',
      code: 'RH134',
      issueDateKey: 'rh134',
      pdfUrl: '/documents/certifications/Certificate-of-Attendance-(RH134-9.0).pdf',
    },
    {
      title: 'Red Hat System Administration I',
      code: 'RH124',
      issueDateKey: 'rh124',
      pdfUrl: '/documents/certifications/Certificate-of-Attendance-(RH124-9.0).pdf',
    },
    {
      title: 'Getting Started with Linux Fundamentals',
      code: 'RH104',
      issueDateKey: 'rh104',
      pdfUrl: '/documents/certifications/Certificate-of-Attendance-(RH104-9.1).pdf',
    },
  ];
}
