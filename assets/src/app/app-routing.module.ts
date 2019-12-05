import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

// PROJECT COMPONENTS
import { HomeComponent } from './home/home.component';
import { JokeComponent } from './joke/joke.component';

const routes: Routes = [
  {
    path: 'home',
    component: HomeComponent
  },
  {
    path: 'joke',
    component: JokeComponent
  },
  {
    path: '',
    redirectTo: '/home',
    pathMatch: 'full'
  },
  {
    path: '**',
    redirectTo: '/home',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
