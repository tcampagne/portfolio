import { Component } from '@angular/core';
import {SidebarComponent} from "../../components/sidebar/sidebar.component";
import {ServicesComponent} from "../../components/services/services.component";

@Component({
  selector: 'app-servicespage',
  standalone: true,
  imports: [
    SidebarComponent,
    ServicesComponent
  ],
  templateUrl: './servicespage.component.html',
  styleUrl: './servicespage.component.css'
})
export class ServicespageComponent {

}
