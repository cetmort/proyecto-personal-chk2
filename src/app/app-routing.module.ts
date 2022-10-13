import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './components/modules/login/login.component';
import { FindComponent } from './components/modules/pages/find/find.component';
import { PlayComponent } from './components/modules/pages/play/play.component';
import { HomeComponent } from './components/modules/pages/home/home.component';

const routes: Routes = [
  {
    path : '',
    pathMatch: 'full',
    redirectTo: 'login'
  },
  {
    path:'login',
    component: LoginComponent
  },
  {
    path: 'find',
    component: FindComponent
  },
  {
    path: 'play',
    component: PlayComponent
  },
  {
    path: 'home',
    component: HomeComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
