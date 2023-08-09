// Angular
import { Component, OnInit } from '@angular/core';
import { CommonModule      } from '@angular/common';
import { ActivatedRoute    } from '@angular/router';
import { trigger, transition, style, animate } from '@angular/animations';

// Components
import { NavbarComponent              } from 'src/app/shared/navbar/navbar.component';
import { BannerSingleComponent        } from 'src/app/sections/banner-single/banner-single.component';
import { DescriptionSingleComponent   } from 'src/app/sections/description-single/description-single.component';
import { ScreensSingleComponent       } from 'src/app/sections/screens-single/screens-single.component';
import { StatisticsComponent          } from 'src/app/sections/statistics/statistics.component';
import { ProjectsComponent            } from 'src/app/sections/projects/projects.component';
import { ContactComponent             } from 'src/app/sections/contact/contact.component';
import { FooterComponent              } from 'src/app/sections/footer/footer.component';
import { OtherProjectsSingleComponent } from 'src/app/sections/other-projects-single/other-projects-single.component';

// Services
import { ProjectsService } from 'src/app/services/projects.service';

// Interfaces
import { Project } from 'src/app/interfaces/project.interface';




@Component({
  	selector: 'app-single-project',
  	standalone: true,
  	imports: [
		CommonModule,
		NavbarComponent,
		BannerSingleComponent,
		DescriptionSingleComponent,
		ScreensSingleComponent,
		StatisticsComponent,
		ProjectsComponent,
		OtherProjectsSingleComponent,
		ContactComponent,
		FooterComponent
	],
  	templateUrl: './single-project.component.html',
  	styleUrls: ['./single-project.component.scss'],
	animations: [
		trigger('pageTransition', [
			transition(':enter, :leave', [
				style({ opacity: 0 }),
				animate('0.5s ease-in-out', style({ opacity: 1 })),
			]),
		])
	],
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
