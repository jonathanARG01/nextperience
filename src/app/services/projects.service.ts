import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Project } from '../interfaces/project.interface';



@Injectable({
  	providedIn: 'root'
})



export class ProjectsService {


	private projects: Project[] = [
		{
			id: 1,
			img: './assets/project1.png',
			img2: './assets/project1-2.png',
			name: 'Landing Philips S300',
			client: 'Philips',
			categories: ['Categoria 1', 'Categoria 2', 'Categoria 3', 'Categoria 4'],
			description: 'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.',
			banner: './assets/banner-single-1.jpg',
			service: '	Diseño UX & UI',
			industry: '',
			img_single: 'img-platform1-1',
			screens_desktop: ['project1-screen1.png', 'project1-screen2.png'],
			screens_mobile: ['project1-screen3.png', 'project1-screen4.png', 'project1-screen5.png']
		},
		{
			id: 2,
			img: './assets/project2.png',
			img2: './assets/project2-2.png',
			name: 'Sitio Veranda',
			client: 'Veranda',
			categories: ['Categoria 1', 'Categoria 2'],
			description: 'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.',
			banner: './assets/banner-single-1.jpg',
			service: '	Diseño UX & UI',
			industry: '',
			img_single: 'img-platform1-1',
			screens_desktop: ['project1-screen1.png', 'project1-screen2.png'],
			screens_mobile: ['project1-screen3.png', 'project1-screen4.png', 'project1-screen5.png']
		},
		{
			id: 3,
			img: './assets/project3.png',
			img2: './assets/project3-2.png',
			name: 'Extreme Zone - Sitio Oficial',
			client: 'Extreme Zone',
			categories: ['Categoria 1', 'Categoria 2', 'Categoria 3'],
			description: 'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.',
			banner: './assets/banner-single-1.jpg',
			service: '	Diseño UX & UI',
			industry: '',
			img_single: 'img-platform1-1',
			screens_desktop: ['project1-screen1.png', 'project1-screen2.png'],
			screens_mobile: ['project1-screen3.png', 'project1-screen4.png', 'project1-screen5.png']
		},
		{
			id: 4,
			img: './assets/project4.png',
			img2: './assets/project2-2.png',
			name: 'Melhuish - Experiencia Automotríz',
			client: 'Melhuish',
			categories: ['Categoria 1', 'Categoria 2', 'Categoria 3'],
			description: 'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.',
			banner: './assets/banner-single-1.jpg',
			service: '	Diseño UX & UI',
			industry: '',
			img_single: 'img-platform1-1',
			screens_desktop: ['project1-screen1.png', 'project1-screen2.png'],
			screens_mobile: ['project1-screen3.png', 'project1-screen4.png', 'project1-screen5.png']
		},
		{
			id: 5,
			img: './assets/project5.png',
			img2: './assets/project3-2.png',
			name: 'Philips - Serie 8000',
			client: 'Philips',
			categories: ['Categoria 1'],
			description: 'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.',
			banner: './assets/banner-single-1.jpg',
			service: '	Diseño UX & UI',
			industry: '',
			img_single: 'img-platform1-1',
			screens_desktop: ['project1-screen1.png', 'project1-screen2.png'],
			screens_mobile: ['project1-screen3.png', 'project1-screen4.png', 'project1-screen5.png']
		}
	];

	
	constructor() {}


	addProject( project: Project ) {
		this.projects.push( project );
	}
	

	getProjects() {
		return this.projects;
	}
	
	
	getProjectById(id: number): Observable<Project | undefined> {
		const project = this.projects.find(project => project.id === id);
		return of(project);
	}
	
	
	clearProjects() {
		this.projects = [];
	}


}


