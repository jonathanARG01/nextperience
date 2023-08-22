import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';

// import Atropos library
import Atropos from 'atropos';



@Component({
  	selector:    'app-clients',
  	standalone:  true,
  	imports:     [CommonModule],
  	templateUrl: './clients.component.html',
  	styleUrls:   ['./clients.component.scss']
})



export class ClientsComponent implements OnInit {


	clients: any = [
		{
			name: 'Pura Artisans',
			img: './assets/customer-logo-1.svg'
		},
		{
			name: 'Biar Consultores',
			img: './assets/customer-logo-2.svg'
		},
		{
			name: 'Genomma Lab',
			img: './assets/customer-logo-3.svg'
		},
		{
			name: 'Gudbalance',
			img: './assets/customer-logo-4.svg'
		},
		{
			name: 'Philips',
			img: './assets/customer-logo-5.svg'
		},
		{
			name: 'Claro',
			img: './assets/customer-logo-6.svg'
		},
		{
			name: 'VyV',
			img: './assets/customer-logo-7.svg'
		},
		{
			name: 'Caminos del Inca',
			img: './assets/customer-logo-8.svg'
		},
		{
			name: 'Aventura Motors',
			img: './assets/customer-logo-9.svg'
		},
		{
			name: 'Author',
			img: './assets/customer-logo-10.svg'
		},
		{
			name: 'Excell',
			img: './assets/customer-logo-11.svg'
		},
		{
			name: 'Abcdin',
			img: './assets/customer-logo-12.svg'
		},
		{
			name: 'Melhuish',
			img: './assets/customer-logo-13.svg'
		},
		{
			name: 'ViuClinic',
			img: './assets/customer-logo-14.svg'
		},
		{
			name: 'Clinica Alemana',
			img: './assets/customer-logo-15.svg'
		},
		{
			name: 'Difor',
			img: './assets/customer-logo-16.svg'
		},
		{
			name: 'Electrolux',
			img: './assets/customer-logo-17.svg'
		},
		{
			name: 'Epson',
			img: './assets/customer-logo-18.svg'
		},
		{
			name: 'Marley Coffee',
			img: './assets/customer-logo-19.svg'
		},
		{
			name: 'Extreme Zone',
			img: './assets/customer-logo-20.svg'
		},
		{
			name: 'Wisetrack',
			img: './assets/customer-logo-21.svg'
		},
		{
			name: 'Wisecity',
			img: './assets/customer-logo-22.svg'
		},
		{
			name: 'Veranda',
			img: './assets/customer-logo-23.svg'
		}
	];


	ngOnInit(): void {
	
		// Initialize
		const myAtropos = Atropos({
			
			el: '.my-atropos',
			activeOffset: 40,
			shadowScale: 1.05,
			onEnter() {
				console.log('Enter');
			},
			onLeave() {
				console.log('Leave');
			},
			onRotate(x, y) {
				console.log('Rotate', x, y);
			}

		});

	}

	
}
