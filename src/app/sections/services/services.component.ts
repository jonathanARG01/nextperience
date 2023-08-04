import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import SwiperCore from 'swiper';



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
		
	}


}
