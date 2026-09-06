import { Component, inject } from '@angular/core';
import { LanguageService } from '../../i18n/language.service';

type IssueDateKey = keyof typeof import('../../i18n/translations').es.education.issueDates;
type CertificationTitleKey = keyof typeof import('../../i18n/translations').es.education.certificationTitles;

interface Certification {
  titleKey: CertificationTitleKey;
  code: string;
  provider?: string;
  issueDateKey: IssueDateKey;
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
  protected readonly certifications: Certification[] = [
    {
      titleKey: 'rh134',
      code: 'RH134',
      provider: 'Red Hat',
      issueDateKey: 'rh134',
      pdfUrl: 'documents/certifications/Certificate-of-Attendance-(RH134-9.0).pdf',
    },
    {
      titleKey: 'rh124',
      code: 'RH124',
      provider: 'Red Hat',
      issueDateKey: 'rh124',
      pdfUrl: 'documents/certifications/Certificate-of-Attendance-(RH124-9.0).pdf',
    },
    {
      titleKey: 'rh104',
      code: 'RH104',
      provider: 'Red Hat',
      issueDateKey: 'rh104',
      pdfUrl: 'documents/certifications/Certificate-of-Attendance-(RH104-9.1).pdf',
    },
    {
      titleKey: 'olimpiada',
      code: '',
      issueDateKey: 'olimpiada',
    },
  ];
}
