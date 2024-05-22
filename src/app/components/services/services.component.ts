import { Component } from '@angular/core';
import {faGlobe, faLaptopCode, faServer, faSyncAlt, faTools, faComments} from "@fortawesome/free-solid-svg-icons";
import {FaIconComponent} from "@fortawesome/angular-fontawesome";

@Component({
  selector: 'app-services',
  standalone: true,
  imports: [
    FaIconComponent
  ],
  templateUrl: './services.component.html',
  styleUrl: './services.component.css'
})
export class ServicesComponent {
  faGlobe = faGlobe;
  faLaptopCode = faLaptopCode;
  faServer = faServer;
  faSyncAlt = faSyncAlt;
  faTools = faTools;
  faComments = faComments;

}
