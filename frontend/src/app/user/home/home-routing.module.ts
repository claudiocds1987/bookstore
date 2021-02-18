import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { BorrarComponent } from './borrar/borrar.component';
import { Borrar2Component } from './borrar2/borrar2.component';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent
  },
  {
    path: 'borrar',
    component: BorrarComponent
  },
  {
    path: 'borrar2',
    component: Borrar2Component
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomeRoutingModule { }
