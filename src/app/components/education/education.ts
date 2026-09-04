import { Component } from '@angular/core';

interface Certification {
  title: string;
  code: string;
  issueDate: string;
  pdfUrl: string;
}

@Component({
  selector: 'app-education',
  imports: [],
  templateUrl: './education.html',
  styleUrl: './education.scss',
})
export class Education {
  protected readonly certifications: Certification[] = [
    {
      title: 'Red Hat System Administration II',
      code: 'RH134',
      issueDate: 'dic. 2024',
      pdfUrl: '/documents/certifications/Certificate-of-Attendance-(RH134-9.0).pdf',
    },
    {
      title: 'Red Hat System Administration I',
      code: 'RH124',
      issueDate: 'oct. 2024',
      pdfUrl: '/documents/certifications/Certificate-of-Attendance-(RH124-9.0).pdf',
    },
    {
      title: 'Getting Started with Linux Fundamentals',
      code: 'RH104',
      issueDate: 'sept. 2024',
      pdfUrl: '/documents/certifications/Certificate-of-Attendance-(RH104-9.1).pdf',
    },
  ];
}
