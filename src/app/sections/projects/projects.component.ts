// Angular
import { Component, OnInit } from '@angular/core';
import { CommonModule      } from '@angular/common';
import { RouterModule      } from '@angular/router';

// Swiper
import Swiper from 'swiper';
import { SwiperOptions } from 'swiper/types';
import { register      } from 'swiper/element/bundle';

// Services
import { ProjectsService } from 'src/app/services/projects.service';

register();



@Component({
  	selector:    'app-projects',
  	standalone:  true,
  	imports:     [CommonModule, RouterModule],
  	templateUrl: './projects.component.html',
  	styleUrls:   ['./projects.component.scss']
})



export class ProjectsComponent implements OnInit {


	projects: any = [];


	constructor( private projectsService: ProjectsService ) {}


	ngOnInit(): void {

		this.getProjects();

		const swiperParams: SwiperOptions = {
			speed: 1000,
  			spaceBetween: 20,
			autoplay: true,
			centeredSlides: true,
			direction: 'horizontal',
			navigation: {
				prevEl: '.swiper-button-prev-swiper2',
				nextEl: '.swiper-button-next-swiper2'
			},
			breakpoints: {
				0: {
				  	slidesPerView: 1,
				  	spaceBetween: 20
				},
				768: {
				  	slidesPerView: 2,
				  	spaceBetween: 30
				},
				1200: {
				  	slidesPerView: 3,
				  	spaceBetween: 40
				},
				1400: {
				  	slidesPerView: 5,
				  	spaceBetween: 10
				}
			}
		};
		  
		const swiper = new Swiper('.swiper2', swiperParams);

		swiper;

	}


	getProjects(): void {
		this.projects = this.projectsService.getProjects();
	}


}
