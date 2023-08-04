import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import SwiperCore, { Swiper } from 'swiper';
// import function to register Swiper Core custom elements
import { register } from 'swiper/element';
// register Swiper custom elements
register();


@Component({
  	selector:    'app-services',
  	standalone:  true,
  	imports:     [CommonModule],
  	templateUrl: './services.component.html',
  	styleUrls:   ['./services.component.scss'],
	schemas:     [ CUSTOM_ELEMENTS_SCHEMA ]
})



export class ServicesComponent implements OnInit {

	
	@ViewChild('swiper') swiperRef: ElementRef | undefined;


	constructor() {
		
	}


	ngOnInit(): void {	
		
		const swiper = new Swiper('.swiper', {
			speed: 400,
			spaceBetween: 100,
		  });

	}


}
