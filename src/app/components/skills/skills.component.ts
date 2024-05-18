import { Component } from '@angular/core';
import {DataService} from "../../services/data.service";

@Component({
  selector: 'app-skills',
  standalone: true,
  imports: [],
  templateUrl: './skills.component.html',
  styleUrl: './skills.component.css'
})
export class SkillsComponent {

  pageContent: string;

  constructor(private dataService: DataService) {
    this.pageContent = '';
  }

  // ngOnInit(): void {
  //   this.dataService.getPageContent('https://passeport.dev/fr/p/ad0c3409-8ab8-4cc9-9b02-9189fb3e564f')
  //     .subscribe(
  //       data => this.pageContent = data,
  //       error => console.error('There was an error!', error)
  //     );
  // }
}
