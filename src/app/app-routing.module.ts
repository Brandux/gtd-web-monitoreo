import { NgModule } from '@angular/core';

import { Routes, RouterModule } from '@angular/router';
import { MainPageComponent } from './core';

const routes: Routes = [
  {
    path: '',
    component: MainPageComponent,
    loadChildren: 'src/app/modules/modules.module#ModulesModule',

  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule { }
