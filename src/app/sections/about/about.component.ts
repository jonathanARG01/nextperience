import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import Swiper from 'swiper';



@Component({
  	selector:    'app-about',
  	standalone:  true,
  	imports:     [CommonModule],
  	templateUrl: './about.component.html',
  	styleUrls:   ['./about.component.scss'],
	schemas:     [ CUSTOM_ELEMENTS_SCHEMA ]
})



export class AboutComponent {

	

}
