import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { ClassComponent } from './home/class/class.component';

export const routes: Routes = [
  {path: '', component:HomeComponent},
  {path: 'class', component:ClassComponent},
  {
    path: '**', component:NotFoundComponent
  }
];
