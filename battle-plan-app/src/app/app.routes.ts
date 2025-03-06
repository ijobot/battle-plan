import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { AboutComponent } from './pages/about/about.component';
import { BattlefieldComponent } from './pages/battlefield/battlefield.component';

export const routes: Routes = [
  { path: '', title: 'Battle Plan Home', component: HomeComponent },
  { path: 'about', title: 'Battle Plan About', component: AboutComponent },
  {
    path: 'battlefield',
    title: 'Battle Plan Battlefield',
    component: BattlefieldComponent,
  },
];
