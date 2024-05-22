import {Component} from '@angular/core';
import {RouterLink} from "@angular/router";
import {FontAwesomeModule} from "@fortawesome/angular-fontawesome";
import {faGithub, faLinkedinIn, faFacebookF} from "@fortawesome/free-brands-svg-icons";

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    RouterLink, FontAwesomeModule
  ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
  faLinkedinIn = faLinkedinIn;
  faGithub = faGithub;
  faFacebookF = faFacebookF;
}
