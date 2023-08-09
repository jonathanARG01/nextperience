import { Component, Renderer2, ElementRef } from '@angular/core';
import { CommonModule } from '@angular/common';

// Components
import { RrssComponent } from '../rrss/rrss.component';



@Component({
  	selector: 'app-navbar',
  	standalone: true,
  	imports: [CommonModule, RrssComponent],
  	templateUrl: './navbar.component.html',
  	styleUrls: ['./navbar.component.scss']
})



export class NavbarComponent {

	constructor(private renderer: Renderer2, private el: ElementRef) {}

	scrollTo(sectionId: string) {
		const element = document.getElementById(sectionId);
		if (element) {
			this.renderer.setStyle(document.body, 'scrollBehavior', 'smooth'); // Opcional: Aplicar desplazamiento suave
			element.scrollIntoView({ behavior: 'smooth', block: 'start' });
			this.renderer.removeStyle(document.body, 'scrollBehavior');
		}
	}

}
