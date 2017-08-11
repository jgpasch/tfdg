import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { TeamDetailComponent } from './home/team-detail/team-detail.component';

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  { path: 'team/:id', component: TeamDetailComponent },
  { path: '**', redirectTo: 'home'}
];

export const routing = RouterModule.forRoot(routes);
