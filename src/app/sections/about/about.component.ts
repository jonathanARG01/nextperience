import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import Swiper from 'swiper';
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

	
	ngOnInit(): void {

		new Swiper('.swiper3', {
			slidesPerView: 1,
			speed: 500,
  			spaceBetween: 20,
			loop: true,
			autoplay: true,
			centeredSlides: true,
			direction: 'horizontal',
			pagination: {
				el: '.swiper-pagination',
				type: 'bullets',
			},
			navigation: {
				prevEl: '.swiper-button-prev',
				nextEl: '.swiper-button-next'
			}
		});

	}


}
