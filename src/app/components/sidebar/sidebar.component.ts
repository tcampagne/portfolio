import {Component} from '@angular/core';
import {RouterLink, RouterLinkActive} from "@angular/router";
import {faFacebookSquare, faGithubSquare, faLinkedin} from "@fortawesome/free-brands-svg-icons";
import {faHome, faIdBadge, faBrain, faIdCard, faLightbulb} from "@fortawesome/free-solid-svg-icons";
import {FaIconComponent} from "@fortawesome/angular-fontawesome";

@Component({
  selector: 'app-sidebar',
  standalone: true,
  templateUrl: './sidebar.component.html',
  imports: [
    RouterLink,
    RouterLinkActive,
    FaIconComponent
  ],
  styleUrl: './sidebar.component.css'
})
export class SidebarComponent {
  faLinkedin = faLinkedin;
  faGithubSquare = faGithubSquare;
  faFacebookSquare = faFacebookSquare;
  faHome = faHome;
  faIdBadge = faIdBadge;
  faBrain = faBrain;
  faIdCard = faIdCard;
  faLightbulb = faLightbulb;
}
