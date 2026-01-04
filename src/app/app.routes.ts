import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { WxAplanComponent } from './home/wx-aplan/wx-aplan.component';

export const routes: Routes = [
  {path: '', component:HomeComponent},
  {path: 'wx-aplan', component:WxAplanComponent},
  {
    path: '**', component:NotFoundComponent
  }
];
