import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SingleProfilePage } from './single-profile.page';

const routes: Routes = [
  {
    path: '',
    component: SingleProfilePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SingleProfilePageRoutingModule {}
