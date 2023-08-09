// Angular
import { Component, Input } from '@angular/core';
import { CommonModule     } from '@angular/common';

// Interfaces
import { Project } from 'src/app/interfaces/project.interface';



@Component({
  	selector: 'app-banner-single',
  	standalone: true,
  	imports: [CommonModule],
  	templateUrl: './banner-single.component.html',
  	styleUrls: ['./banner-single.component.scss']
})



export class BannerSingleComponent {


	@Input() project!: Project;

	
}
