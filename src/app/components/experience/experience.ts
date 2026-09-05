import { Component, inject } from '@angular/core';
import { LanguageService } from '../../i18n/language.service';

interface ExperienceTask {
  description: string;
  technologies?: string[];
}

interface ExperienceItem {
  company: string;
  role: string;
  period: string;
  duration: string;
  location: string;
  description: string;
  tasks: ExperienceTask[];
}

@Component({
  selector: 'app-experience',
  imports: [],
  templateUrl: './experience.html',
  styleUrl: './experience.scss',
})
export class Experience {
  protected readonly language = inject(LanguageService);
  protected readonly experiences: ExperienceItem[] = [
    {
      company: 'Grupo ARI',
      role: 'Desarrollador Full Stack en prácticas',
      period: 'Enero 2026 - Abril 2026',
      duration: '4 meses',
      location: 'Presencial',
      description: 'Formé parte del equipo de desarrollo de software del departamento de informática, participando en la creación y mantenimiento de aplicaciones web para los distintos verticales de Grupo ARI.',
      tasks: [
        {
          description: 'Desarrollé e integré módulos, operaciones CRUD y nuevas funcionalidades para un ERP corporativo mediante',
          technologies: ['PHP', 'Laravel'],
        },
        {
          description: 'Migré un módulo de gestión de inventario desde un proyecto antiguo, creando nuevas migraciones de base de datos y adaptando la lógica de negocio.',
        },
        {
          description: 'Creé comandos para automatizar la migración de datos entre sistemas y conservar la integridad de la información.',
        },
        {
          description: 'Resolví incidencias reportadas por usuarios y participé en reuniones de seguimiento dentro de un flujo de trabajo basado en',
          technologies: ['Scrum', 'Jira'],
        },
      ],
    },
  ];
}
