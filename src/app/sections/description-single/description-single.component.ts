import { Component, Input } from '@angular/core';
import { CommonModule     } from '@angular/common';

import { Project } from 'src/app/interfaces/project.interface';



@Component({
  	selector: 'app-description-single',
  	standalone: true,
  	imports: [CommonModule],
  	templateUrl: './description-single.component.html',
  	styleUrls: ['./description-single.component.scss']
})



export class DescriptionSingleComponent {


	@Input() project!: Project;


}
