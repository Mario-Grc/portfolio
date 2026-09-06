import { Component, inject } from '@angular/core';
import { LanguageService } from '../../i18n/language.service';

type CredentialKey = keyof typeof import('../../i18n/translations').es.education.credentialTitles;

interface Credential {
  key: CredentialKey;
  code?: string;
  provider?: string;
  pdfUrl?: string;
}

@Component({
  selector: 'app-education',
  imports: [],
  templateUrl: './education.html',
  styleUrl: './education.scss',
})
export class Education {
  protected readonly language = inject(LanguageService);
  protected readonly courses: Credential[] = [
    {
      key: 'rh134',
      code: 'RH134',
      provider: 'Red Hat',
      pdfUrl: 'documents/certifications/Certificate-of-Attendance-(RH134-9.0).pdf',
    },
    {
      key: 'rh124',
      code: 'RH124',
      provider: 'Red Hat',
      pdfUrl: 'documents/certifications/Certificate-of-Attendance-(RH124-9.0).pdf',
    },
    {
      key: 'rh104',
      code: 'RH104',
      provider: 'Red Hat',
      pdfUrl: 'documents/certifications/Certificate-of-Attendance-(RH104-9.1).pdf',
    },
  ];

  protected readonly recognitions: Credential[] = [
    {
      key: 'olimpiada',
    },
    {
      key: 'iasc',
    },
  ];
}
