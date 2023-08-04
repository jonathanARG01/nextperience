// Angular
import { Component    } from '@angular/core';
import { CommonModule } from '@angular/common';

// Sections
import { MainComponent       } from 'src/app/sections/main/main.component';
import { TalkComponent       } from 'src/app/sections/talk/talk.component';
import { ServicesComponent   } from 'src/app/sections/services/services.component';
import { ProjectsComponent   } from 'src/app/sections/projects/projects.component';
import { StatisticsComponent } from 'src/app/sections/statistics/statistics.component';
import { ClientsComponent    } from 'src/app/sections/clients/clients.component';
import { AboutComponent      } from 'src/app/sections/about/about.component';
import { ContactComponent    } from 'src/app/sections/contact/contact.component';
import { FooterComponent     } from 'src/app/sections/footer/footer.component';

// Components
import { NavbarComponent } from 'src/app/shared/navbar/navbar.component';


@Component({
  	selector:'app-home',
  	standalone: true,
  	imports:     [
		CommonModule,
		NavbarComponent,
		MainComponent,
		TalkComponent,
		ServicesComponent,
		ProjectsComponent,
		StatisticsComponent,
		ClientsComponent,
		AboutComponent,
		ContactComponent,
		FooterComponent
	],
  	templateUrl: './home.component.html',
  	styleUrls: ['./home.component.scss']
})



export class HomeComponent {

}
