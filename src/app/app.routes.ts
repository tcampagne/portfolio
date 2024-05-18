import { Routes } from '@angular/router';
import {HomepageComponent} from "./pages/homepage/homepage.component";
import {AboutpageComponent} from "./pages/aboutpage/aboutpage.component";
import {SkillspageComponent} from "./pages/skillspage/skillspage.component";
import {ResumepageComponent} from "./pages/resumepage/resumepage.component";

export const routes: Routes = [
  { path: '', component: HomepageComponent },
  { path: 'home', component: HomepageComponent },
   { path: 'about', component: AboutpageComponent },
   { path: 'skills', component: SkillspageComponent },
   { path: 'resume', component: ResumepageComponent },
  // { path: '**', redirectTo: '' }
  ];

