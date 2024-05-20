import {AfterViewInit, Component, HostListener, OnInit, ViewChild} from '@angular/core';
import {DataService} from "../../services/data.service";

@Component({
  selector: 'app-skills',
  standalone: true,
  imports: [],
  templateUrl: './skills.component.html',
  styleUrl: './skills.component.css'
})
export class SkillsComponent {

  constructor() {
  }

  openPassport(): void {
  const url = 'https://passeport.dev/en/p/ad0c3409-8ab8-4cc9-9b02-9189fb3e564f';
  window.open(url, '_blank');
}

}
