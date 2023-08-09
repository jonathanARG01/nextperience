import { Component, Input } from '@angular/core';
import { CommonModule     } from '@angular/common';

import { Project } from 'src/app/interfaces/project.interface';



@Component({
  	selector: 'app-screens-single',
  	standalone: true,
  	imports: [CommonModule],
  	templateUrl: './screens-single.component.html',
  	styleUrls: ['./screens-single.component.scss']
})



export class ScreensSingleComponent {


	@Input() project!: Project;


}
