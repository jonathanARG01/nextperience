import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import Swiper from 'swiper';
import { SwiperOptions } from 'swiper/types';
import { register } from 'swiper/element/bundle';

register();



@Component({
  	selector:    'app-about',
  	standalone:  true,
  	imports:     [CommonModule],
  	templateUrl: './about.component.html',
  	styleUrls:   ['./about.component.scss']
})



export class AboutComponent implements OnInit {

	
	slider: Swiper | undefined;

	ngOnInit(): void {

		const swiperParams: SwiperOptions = {
			slidesPerView: 1,
			speed: 500,
  			spaceBetween: 20,
			loop: true,
			autoplay: true,
			centeredSlides: true,
			direction: 'horizontal',
			navigation: {
				prevEl: '.swiper-button-prev-about',
				nextEl: '.swiper-button-next-about'
			},
			pagination: {
				el: '.swiper-pagination-about',
				clickable: true,
				type: 'bullets',
			}
		};

		this.slider = new Swiper('.swiper3', swiperParams);
	
	}



}
