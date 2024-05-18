import { Component } from '@angular/core';

@Component({
  selector: 'app-resume',
  standalone: true,
  imports: [],
  templateUrl: './resume.component.html',
  styleUrl: './resume.component.css'
})
export class ResumeComponent {

  downloadResume() {
    const url = '/assets/CV_Campagne_Thibault.pdf'; // Remplacez par le chemin réel du document
    window.open(url, '_blank');
  }
}
