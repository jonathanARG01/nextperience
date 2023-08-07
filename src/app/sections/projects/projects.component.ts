import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import Swiper from 'swiper';
import { SwiperOptions } from 'swiper/types';
import { register } from 'swiper/element/bundle';

register();


@Component({
  	selector:    'app-projects',
  	standalone:  true,
  	imports:     [CommonModule],
  	templateUrl: './projects.component.html',
  	styleUrls:   ['./projects.component.scss']
})



export class ProjectsComponent implements OnInit {


	projects: any = [
		{
			img: './assets/project1.png',
			name: 'Landing Philips S300',
			client: 'Philips',
			categories: ['Categoria 1', 'Categoria 2', 'Categoria 3', 'Categoria 4'],
			description: 'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.'
		},
		{
			img: './assets/project2.png',
			name: 'Sitio',
			client: 'Veranda',
			categories: ['Categoria 1', 'Categoria 2'],
			description: 'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.'
		},
		{
			img: './assets/project3.png',
			name: 'Sitio',
			client: 'Extreme Zone',
			categories: ['Categoria 1', 'Categoria 2', 'Categoria 3'],
			description: 'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.'
		},
		{
			img: './assets/project4.png',
			name: 'Experiencia Automotríz',
			client: 'Melhuish',
			categories: ['Categoria 1', 'Categoria 2', 'Categoria 3'],
			description: 'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.'
		},
		{
			img: './assets/project5.png',
			name: 'Serie 8000',
			client: 'Philips',
			categories: ['Categoria 1'],
			description: 'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.'
		}
	];


	ngOnInit(): void {

		const swiperParams: SwiperOptions = {
			speed: 500,
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
				}
			}
		};
		  
		const swiper = new Swiper('.swiper2', swiperParams);

		swiper;

	}


}
