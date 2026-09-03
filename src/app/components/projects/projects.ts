import { Component } from '@angular/core';

interface Project {
	number: string;
	title: string;
	description: string;
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
	protected readonly projects: Project[] = [
		{
			number: '01',
			title: 'QuackCode',
			description: 'Entorno de aprendizaje para practicar programación con un editor de código, un asistente basado en un modelo local y ejecución de pruebas.',
			technologies: ['React', 'TypeScript', 'Express', 'SQLite', 'LM Studio'],
			codeUrl: 'https://github.com/Mario-Grc/proyecto-tfg',
		},
		{
			number: '02',
			title: 'ClashPoints',
			description: 'Juego de preguntas y respuestas para Android con categorías de cultura general, puntuación por velocidad y ranking global.',
			technologies: ['Kotlin', 'Jetpack Compose', 'Firebase', 'MVVM'],
			codeUrl: 'https://github.com/Mario-Grc/ClashPoints',
		},
		{
			number: '03',
			title: 'Timac',
			description: 'Proyecto de aplicación multiplataforma desarrollado con Angular e Ionic.',
			technologies: ['Angular', 'Ionic', 'TypeScript'],
			codeUrl: 'https://github.com/IanSamuelTrujilloGil/Timac',
		},
		{
			number: '04',
			title: 'Nexo Repair',
			description: 'Sistema full stack para gestionar un negocio de reparación de dispositivos electrónicos.',
			technologies: ['Java', 'Spring Boot', 'Angular', 'PostgreSQL'],
			codeUrl: 'https://github.com/Mario-Grc/nexo-repair',
		},
		{
			number: '05',
			title: 'Split Light',
			description: 'Juego de escape room para dos jugadores, con habilidades únicas, puzles y distintos planetas por explorar.',
			technologies: ['Godot 4.4', 'GDScript'],
			codeUrl: 'https://github.com/Juanquirr/Split-Light',
		},
		{
			number: '06',
			title: 'Computer Vision Aim Assist',
			description: 'Sistema académico de visión por computador que compara técnicas de detección y seguimiento en tiempo real.',
			technologies: ['Python', 'OpenCV', 'YOLO', 'Kalman Filter'],
			codeUrl: 'https://github.com/juanfradelrm/Computer-Vision-Aim-Assist',
		},
	];
}
