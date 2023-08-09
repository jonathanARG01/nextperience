import { Component, Renderer2, ElementRef } from '@angular/core';
import { CommonModule } from '@angular/common';



@Component({
    selector:    'app-footer',
    standalone:  true,
    imports:     [CommonModule],
    templateUrl: './footer.component.html',
    styleUrls:   ['./footer.component.scss']
})



export class FooterComponent {

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
