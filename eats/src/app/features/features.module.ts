import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FeaturesRoutingModule } from './features-routing.module';
import { HomeComponent } from './home/home.component';
import { SelectoptionComponent } from './selectoption/selectoption.component';
import { ConsumerregComponent } from './consumerreg/consumerreg.component';
import { BusinessregComponent } from './businessreg/businessreg.component';


@NgModule({
  declarations: [HomeComponent, SelectoptionComponent, ConsumerregComponent, BusinessregComponent],
  imports: [
    CommonModule,
    FeaturesRoutingModule
  ]
})
export class FeaturesModule { }
