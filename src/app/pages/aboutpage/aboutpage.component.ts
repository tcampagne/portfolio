import { Component } from '@angular/core';
import {SidebarComponent} from "../../components/sidebar/sidebar.component";
import {AboutComponent} from "../../components/about/about.component";

@Component({
  selector: 'app-aboutpage',
  standalone: true,
  imports: [
    SidebarComponent,
    AboutComponent
  ],
  templateUrl: './aboutpage.component.html',
  styleUrl: './aboutpage.component.css'
})
export class AboutpageComponent {

}
