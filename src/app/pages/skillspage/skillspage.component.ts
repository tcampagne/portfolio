import { Component } from '@angular/core';
import {SidebarComponent} from "../../components/sidebar/sidebar.component";
import {SkillsComponent} from "../../components/skills/skills.component";

@Component({
  selector: 'app-skillspage',
  standalone: true,
  imports: [
    SidebarComponent,
    SkillsComponent
  ],
  templateUrl: './skillspage.component.html',
  styleUrl: './skillspage.component.css'
})
export class SkillspageComponent {

}
