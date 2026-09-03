import { Component } from '@angular/core';

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
          description: 'Desarrollo e integración de módulos, operaciones CRUD y nuevas funcionalidades para un ERP corporativo mediante',
          technologies: ['PHP', 'Laravel'],
        },
        {
          description: 'Migración de un módulo de gestión de inventario desde un proyecto antiguo, incluyendo nuevas migraciones de base de datos y adaptación de la lógica de negocio.',
        },
        {
          description: 'Creación de comandos para automatizar la migración de datos entre sistemas y conservar la integridad de la información.',
        },
        {
          description: 'Resolución de incidencias reportadas por usuarios y participación en reuniones de seguimiento dentro de un flujo de trabajo basado en',
          technologies: ['Scrum', 'Jira'],
        },
      ],
    },
  ];
}
