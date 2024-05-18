import { Component } from '@angular/core';
import {SidebarComponent} from "../../components/sidebar/sidebar.component";
import {SkillsComponent} from "../../components/skills/skills.component";
import {ResumeComponent} from "../../components/resume/resume.component";

@Component({
  selector: 'app-resumepage',
  standalone: true,
  imports: [
    SidebarComponent,
    SkillsComponent,
    ResumeComponent
  ],
  templateUrl: './resumepage.component.html',
  styleUrl: './resumepage.component.css'
})
export class ResumepageComponent {

}
