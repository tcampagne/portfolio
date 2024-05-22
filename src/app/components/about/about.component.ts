import { Component } from '@angular/core';
import {faLocationDot, faPhone, faEnvelope, faGraduationCap} from "@fortawesome/free-solid-svg-icons";
import {FaIconComponent} from "@fortawesome/angular-fontawesome";

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [
    FaIconComponent
  ],
  templateUrl: './about.component.html',
  styleUrl: './about.component.css'
})
export class AboutComponent {
  faLocationDot = faLocationDot;
  fzPhone = faPhone;
  faEnvelope = faEnvelope;
  faGraduationCap = faGraduationCap;

  protected readonly faPhone = faPhone;
}
