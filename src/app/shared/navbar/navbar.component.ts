import { Component    } from '@angular/core';
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

}
