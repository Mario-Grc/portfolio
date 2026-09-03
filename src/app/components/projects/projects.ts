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
			description: 'Entorno para practicar programación con un editor de código, un asistente basado en la técnica Rubber Duck Debugging y ejecución de pruebas. El asistente utiliza modelos de IA locales.',
			technologies: ['React', 'TypeScript', 'Express', 'SQLite', 'LM Studio'],
			codeUrl: 'https://github.com/Mario-Grc/proyecto-tfg',
		},
		{
			number: '02',
			title: 'ClashPoints',
			description: 'Juego de preguntas y respuestas para Android, desarrollado junto a un compañero, en el que la velocidad y la precisión determinan la puntuación y el ranking global.',
			technologies: ['Kotlin', 'Jetpack Compose', 'Firebase', 'MVVM'],
			codeUrl: 'https://github.com/Mario-Grc/ClashPoints',
		},
		{
			number: '03',
			title: 'Timac',
			description: 'Web para comprar en una ferretería ficticia, desarrollada junto a dos compañeros. Construida con Angular e Ionic para poder utilizarla también como aplicación móvil.',
			technologies: ['Angular', 'Ionic', 'TypeScript'],
			codeUrl: 'https://github.com/IanSamuelTrujilloGil/Timac',
		},
		{
			number: '04',
			title: 'Nexo Repair',
			description: 'Sistema full stack para gestionar las reparaciones y el trabajo diario de un negocio de dispositivos electrónicos.',
			technologies: ['Java', 'Spring Boot', 'Angular', 'PostgreSQL'],
			codeUrl: 'https://github.com/Mario-Grc/nexo-repair',
		},
		{
			number: '05',
			title: 'Split Light',
			description: 'Juego de escape room en el que se controlan dos personajes, desarrollado junto a varios compañeros. El jugador debe utilizar las habilidades de cada personaje para resolver los puzles.',
			technologies: ['Godot 4.4', 'GDScript'],
			codeUrl: 'https://github.com/Juanquirr/Split-Light',
		},
		{
			number: '06',
			title: 'Computer Vision Aim Assist',
			description: 'Proyecto académico de visión por computador, desarrollado junto a dos compañeros. Analiza la pantalla mientras juegas un videojuego para detectar y seguir objetivos en tiempo real, incorporando funciones experimentales de asistencia al apuntado.',
			technologies: ['Python', 'OpenCV', 'YOLO', 'Kalman Filter'],
			codeUrl: 'https://github.com/juanfradelrm/Computer-Vision-Aim-Assist',
		},
	];
}
