import { Component } from '@angular/core';

interface Project {
	tag: string;
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
			tag: 'Full Stack',
			title: 'QuackCode',
			description: 'Entorno para practicar programación con un editor de código, un asistente inspirado en la técnica Rubber Duck Debugging y ejecución de pruebas. El asistente utiliza modelos de IA locales.',
			technologies: ['React', 'TypeScript', 'Express', 'SQLite', 'LM Studio'],
			codeUrl: 'https://github.com/Mario-Grc/proyecto-tfg',
		},
		{
			tag: 'Android',
			title: 'ClashPoints',
			description: 'Juego de preguntas y respuestas para Android, desarrollado junto a un compañero, en el que la velocidad y la precisión determinan la puntuación y el ranking global.',
			technologies: ['Kotlin', 'Jetpack Compose', 'Firebase', 'MVVM'],
			codeUrl: 'https://github.com/Mario-Grc/ClashPoints',
		},
		{
			tag: 'Web',
			title: 'Timac',
			description: 'Web para comprar en una ferretería ficticia, desarrollada junto a dos compañeros. Construida con Angular e Ionic para poder utilizarla también como aplicación móvil.',
			technologies: ['Angular', 'Ionic', 'TypeScript', 'Firebase'],
			codeUrl: 'https://github.com/IanSamuelTrujilloGil/Timac',
		},
		{
			tag: 'Full Stack',
			title: 'Nexo Repair',
			description: 'Sistema full stack para gestionar las reparaciones y el trabajo diario de un negocio de dispositivos electrónicos.',
			technologies: ['Java', 'Spring Boot', 'Angular', 'PostgreSQL'],
			codeUrl: 'https://github.com/Mario-Grc/nexo-repair',
		},
		{
			tag: 'Cloud',
			title: 'Animal Shelter API',
			description: 'API REST desplegada en AWS para comparar dos arquitecturas: una basada en contenedores (ECS Fargate) y otra Serverless (Lambda). Automatizada por completo con CloudFormation, incluye infraestructura de red aislada (VPC, subnets privadas, NLB) y una comparativa de costes.',
			technologies: ['AWS', 'CloudFormation', 'ECS Fargate', 'AWS Lambda', 'Docker', 'Node.js', 'PostgreSQL'],
			codeUrl: 'https://github.com/Mario-Grc/CN-P1',
		},
		{
			tag: 'Computer Vision',
			title: 'Computer Vision Aim Assist',
			description: 'Proyecto académico de visión por computador, desarrollado junto a dos compañeros. Analiza la pantalla mientras juegas un videojuego para detectar y seguir objetivos en tiempo real, incorporando funciones experimentales de asistencia al apuntado.',
			technologies: ['Python', 'OpenCV', 'YOLO', 'Kalman Filter'],
			codeUrl: 'https://github.com/juanfradelrm/Computer-Vision-Aim-Assist',
		},
	];
}
