import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SingleProfilePageRoutingModule } from './single-profile-routing.module';

import { SingleProfilePage } from './single-profile.page';


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SingleProfilePageRoutingModule
  ],
  declarations: [SingleProfilePage]
})
export class SingleProfilePageModule {}
