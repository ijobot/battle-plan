import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { AboutComponent } from './pages/about/about.component';
import { BattlefieldComponent } from './pages/battlefield/battlefield.component';

export const routes: Routes = [
    { path: "", component: HomeComponent},
    { path: "about", component: AboutComponent},
    { path: "battlefield", component: BattlefieldComponent}
];
