import { Component    } from '@angular/core';
import { CommonModule } from '@angular/common';



@Component({
  	selector:    'app-clients',
  	standalone:  true,
  	imports:     [CommonModule],
  	templateUrl: './clients.component.html',
  	styleUrls:   ['./clients.component.scss']
})



export class ClientsComponent {


	clients: any = [
		{
			name: 'Aventura Motors',
			img: './assets/customer-logo-1.svg'
		},
		{
			name: 'Marley Coffee',
			img: './assets/customer-logo-2.svg'
		},
		{
			name: 'Biar Consultores',
			img: './assets/customer-logo-3.svg'
		},
		{
			name: 'Extreme Zone',
			img: './assets/customer-logo-4.svg'
		},
		{
			name: 'Claro',
			img: './assets/customer-logo-5.svg'
		},
		{
			name: 'Genomma Lab',
			img: './assets/customer-logo-6.svg'
		},
		{
			name: 'Viu Clinic',
			img: './assets/customer-logo-7.svg'
		},
		{
			name: 'Wisetrack',
			img: './assets/customer-logo-8.svg'
		},
		{
			name: 'Philips',
			img: './assets/customer-logo-9.svg'
		},
		{
			name: 'Melhuish',
			img: './assets/customer-logo-10.svg'
		},
		{
			name: 'Wisecity',
			img: './assets/customer-logo-11.svg'
		},
		{
			name: 'Veranda',
			img: './assets/customer-logo-12.svg'
		}
	];

	
}
