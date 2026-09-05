import { Component, inject } from '@angular/core';
import { LanguageService } from '../../i18n/language.service';

interface SkillGroup {
  key: 'languages' | 'frameworks' | 'data' | 'tools';
  skills: string[];
}

@Component({
  selector: 'app-skills',
  imports: [],
  templateUrl: './skills.html',
  styleUrl: './skills.scss',
})
export class Skills {
  protected readonly language = inject(LanguageService);
  protected readonly skillGroups: SkillGroup[] = [
    {
      key: 'languages',
      skills: ['PHP', 'Java', 'Python', 'JavaScript', 'TypeScript', 'Kotlin', 'GDScript'],
    },
    {
      key: 'frameworks',
      skills: ['Laravel', 'Spring Boot', 'Angular', 'React', 'Ionic', 'Express'],
    },
    {
      key: 'data',
      skills: ['PostgreSQL', 'MySQL', 'SQLite', 'APIs REST', 'MVC'],
    },
    {
      key: 'tools',
      skills: [
        'Git',
        'Docker',
        'Linux',
        'Apache',
        'AWS',
        'Node.js',
        'Scrum',
        'CI/CD',
      ],
    },
  ];
}
