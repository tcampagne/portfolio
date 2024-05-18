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

  // @ViewChild('mobile-nav-toggle') mobileNavToggle: ElementRef;

  constructor(private elementRef: ElementRef<HTMLElement>) {}

  ngOnInit() {
    // const element = document.getElementsByTagName('body');
    // element.
  }

  openNav() {
    // select('body').classList.toggle('mobile-nav-active')
    // this.classList.toggle('bi-list')
    // this.classList.toggle('bi-x')

  }
}
