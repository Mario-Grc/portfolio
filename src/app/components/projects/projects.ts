import { Component, inject } from '@angular/core';
import { LanguageService } from '../../i18n/language.service';
import { es } from '../../i18n/translations';

type ProjectKey = keyof typeof es.projects.descriptions;
type ProjectTagKey = keyof typeof es.projects.tags;

interface Project {
	tagKey: ProjectTagKey;
	title: string;
	descriptionKey: ProjectKey;
	technologies: string[];
	codeUrl: string;
}

@Component({
	selector: 'app-projects',
	imports: [],
	templateUrl: './projects.html',
	styleUrl: './projects.scss',
})
export class Projects {
	protected readonly language = inject(LanguageService);
	protected readonly projects: Project[] = [
		{
			tagKey: 'quackCode',
			title: 'QuackCode',
			descriptionKey: 'quackCode',
			technologies: ['React', 'TypeScript', 'Express', 'SQLite', 'LM Studio'],
			codeUrl: 'https://github.com/Mario-Grc/proyecto-tfg',
		},
		{
			tagKey: 'clashPoints',
			title: 'ClashPoints',
			descriptionKey: 'clashPoints',
			technologies: ['Kotlin', 'Jetpack Compose', 'Firebase', 'MVVM'],
			codeUrl: 'https://github.com/Mario-Grc/ClashPoints',
		},
		{
			tagKey: 'timac',
			title: 'Timac',
			descriptionKey: 'timac',
			technologies: ['Angular', 'Ionic', 'TypeScript', 'Firebase'],
			codeUrl: 'https://github.com/IanSamuelTrujilloGil/Timac',
		},
		{
			tagKey: 'nexoRepair',
			title: 'Nexo Repair',
			descriptionKey: 'nexoRepair',
			technologies: ['Java', 'Spring Boot', 'Angular', 'PostgreSQL'],
			codeUrl: 'https://github.com/Mario-Grc/nexo-repair',
		},
		{
			tagKey: 'animalShelterApi',
			title: 'Animal Shelter API',
			descriptionKey: 'animalShelterApi',
			technologies: ['AWS', 'CloudFormation', 'ECS Fargate', 'AWS Lambda', 'Docker', 'Node.js', 'PostgreSQL'],
			codeUrl: 'https://github.com/Mario-Grc/CN-P1',
		},
		{
			tagKey: 'computerVisionAimAssist',
			title: 'Computer Vision Aim Assist',
			descriptionKey: 'computerVisionAimAssist',
			technologies: ['Python', 'OpenCV', 'YOLO', 'Kalman Filter'],
			codeUrl: 'https://github.com/juanfradelrm/Computer-Vision-Aim-Assist',
		},
	];
}
