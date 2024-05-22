import { Component } from '@angular/core';
import {faDownload} from "@fortawesome/free-solid-svg-icons";
import {FaIconComponent} from "@fortawesome/angular-fontawesome";

@Component({
  selector: 'app-resume',
  standalone: true,
  imports: [
    FaIconComponent
  ],
  templateUrl: './resume.component.html',
  styleUrl: './resume.component.css'
})
export class ResumeComponent {
  faDownload = faDownload;

  downloadResume() {
    const url = '/assets/CV_Campagne_Thibault.pdf';
    window.open(url, '_blank');
  }
}
