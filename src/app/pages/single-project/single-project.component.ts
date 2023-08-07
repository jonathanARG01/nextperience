// Angular
import { Component, OnInit } from '@angular/core';
import { CommonModule      } from '@angular/common';
import { ActivatedRoute    } from '@angular/router';

// Components
import { NavbarComponent     } from 'src/app/shared/navbar/navbar.component';
import { StatisticsComponent } from 'src/app/sections/statistics/statistics.component';
import { ProjectsComponent   } from 'src/app/sections/projects/projects.component';
import { ContactComponent    } from 'src/app/sections/contact/contact.component';
import { FooterComponent     } from 'src/app/sections/footer/footer.component';

// Services
import { ProjectsService } from 'src/app/services/projects.service';

// Interfaces
import { Project } from 'src/app/interfaces/project.interface';



@Component({
  	selector:    'app-single-project',
  	standalone:  true,
  	imports:     [
		CommonModule,
		NavbarComponent,
		StatisticsComponent,
		ProjectsComponent,
		ContactComponent,
		FooterComponent
	],
  	templateUrl: './single-project.component.html',
  	styleUrls:   ['./single-project.component.scss']
})



export class SingleProjectComponent implements OnInit {


	public project?: Project;
	isLoading: boolean = true;


	constructor(
		private activatedRoute: ActivatedRoute,
		private projectsService: ProjectsService
	) {}


	ngOnInit(): void {
	
		this.activatedRoute.params.subscribe(params => {
	
			const id = +params['id'];
	  
			this.projectsService.getProjectById(id).subscribe((project: Project | undefined) => {
				
				console.log('project:', project);
				setTimeout(() => {
					this.isLoading = false;
					this.project = project;
				}, 2000);

		  	});

		});
	
	}


}
