import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import Swiper from 'swiper';
import { SwiperOptions } from 'swiper/types';
import { register } from 'swiper/element/bundle';

register();



@Component({
  	selector:    'app-services',
  	standalone:  true,
  	imports:     [CommonModule],
  	templateUrl: './services.component.html',
  	styleUrls:   ['./services.component.scss']
})



export class ServicesComponent implements OnInit {


	services: any = [
		{
			img: './assets/offer1.png',
			name: 'Strategic Research',
			description: 'Desarrollamos un análisis profundo y exhaustivo del mercado, la industria, la competencia y el público objetivo de tu marca. La investigación estratégica proporciona información valiosa para desarrollar una estrategia digital sólida y efectiva.',
			characteristics: ['Análisis de mercado y tendencias.', 'Investigación de la competencia y benchmarking.', 'Estudio del público objetivo y comportamiento del consumidor.', 'Análisis de datos y métricas clave.']
		},
		{
			img: './assets/offer2.png',
			name: 'Brand Experience',
			description: 'Generamos una experiencia positiva y coherente para los clientes en cada punto de contacto con la marca. El objetivo es generar una conexión emocional y significativa con la audiencia.',
			characteristics: ['Diseño de identidad de marca y logotipos.', 'Desarrollo de estrategias de experiencia del cliente (CX).', 'Diseño y desarrollo de interfaces de usuario (UI) y experiencia de usuario (UX).', 'Creación de guías de estilo y manuales de marca.']
		},
		{
			img: './assets/offer3.png',
			name: 'Brand Content',
			description: 'Contenido relevante y valioso para atraer, informar y comprometer a la audiencia. El contenido de marca ayuda a fortalecer la autoridad y presencia en línea de la marca.',
			characteristics: ['Creación de estrategias de contenido.', 'Producción de contenido multimedia (artículos, videos, infografías, etc.).', 'Gestión de redes sociales y estrategias de social media.', 'Marketing de contenidos y SEO.']
		}
	];

	slider: Swiper | undefined;

	ngOnInit(): void {

		const swiperParams: SwiperOptions = {
			speed: 500,
  			spaceBetween: 20,
			autoplay: true,
			loop: false,
			centeredSlides: true,
			navigation: {
				prevEl: '.swiper-button-prev',
				nextEl: '.swiper-button-next'
			},
			pagination: {
				el: '.swiper-pagination',
				clickable: true,
				type: 'bullets'
			},
			breakpoints: {
				0: {
				  	slidesPerView: 1,
				  	spaceBetween: 20
				},
				1100: {
				  	slidesPerView: 3,
				  	spaceBetween: 40
				}
			}
		};

		this.slider = new Swiper('.swiper1', swiperParams);

	}

}
