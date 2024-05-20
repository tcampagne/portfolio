import {Component, ElementRef, ViewChild} from '@angular/core';
import {RouterLink, RouterLinkActive} from "@angular/router";

@Component({
  selector: 'app-sidebar',
  standalone: true,
  templateUrl: './sidebar.component.html',
  imports: [
    RouterLink,
    RouterLinkActive
  ],
  styleUrl: './sidebar.component.css'
})
export class SidebarComponent {

  constructor(private elementRef: ElementRef<HTMLElement>) {}
}
