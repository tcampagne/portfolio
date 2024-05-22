import {Component} from '@angular/core';
import {faJava, faAngular, faHtml5, faCss3Alt, faJsSquare, faReact, faNodeJs, faNpm} from "@fortawesome/free-brands-svg-icons";
import {FaIconComponent} from "@fortawesome/angular-fontawesome";

@Component({
  selector: 'app-skills',
  standalone: true,
  imports: [
    FaIconComponent
  ],
  templateUrl: './skills.component.html',
  styleUrl: './skills.component.css'
})
export class SkillsComponent {
  faJava = faJava;
  faAngular = faAngular;
  faHtml5 = faHtml5;
  faCss3Alt = faCss3Alt;
  faJsSquare = faJsSquare;
  faReact = faReact;
  faNodeJs = faNodeJs;
  faNpm = faNpm;

  constructor() {
  }

  openPassport(): void {
  const url = 'https://passeport.dev/en/p/ad0c3409-8ab8-4cc9-9b02-9189fb3e564f';
  window.open(url, '_blank');
}

}
