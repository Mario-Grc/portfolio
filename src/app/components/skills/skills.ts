import { Component } from '@angular/core';

interface SkillGroup {
  title: string;
  skills: string[];
}

@Component({
  selector: 'app-skills',
  imports: [],
  templateUrl: './skills.html',
  styleUrl: './skills.scss',
})
export class Skills {
  protected readonly skillGroups: SkillGroup[] = [
    {
      title: 'Lenguajes',
      skills: ['PHP', 'Java', 'Python', 'JavaScript', 'TypeScript', 'Kotlin', 'GDScript'],
    },
    {
      title: 'Frameworks y desarrollo',
      skills: ['Laravel', 'Spring Boot', 'Angular', 'React', 'Ionic', 'Express'],
    },
    {
      title: 'Datos y backend',
      skills: ['PostgreSQL', 'MySQL', 'SQLite', 'APIs REST', 'MVC'],
    },
    {
      title: 'Herramientas y trabajo',
      skills: ['Git', 'Docker', 'Linux', 'Apache', 'AWS', 'Scrum', 'CI/CD'],
    },
  ];
}
