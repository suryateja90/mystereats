import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FeaturesRoutingModule } from './features-routing.module';
import { HomeComponent } from './home/home.component';
import { SelectoptionComponent } from './selectoption/selectoption.component';
import { ConsumerregComponent } from './consumerreg/consumerreg.component';
import { BusinessregComponent } from './businessreg/businessreg.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { SigninComponent } from './signin/signin.component';


@NgModule({
  declarations: [HomeComponent, SelectoptionComponent, ConsumerregComponent, BusinessregComponent, HeaderComponent, FooterComponent, SigninComponent],
  imports: [
    CommonModule,
    FormsModule, ReactiveFormsModule,
    FeaturesRoutingModule
  ]
})
export class FeaturesModule { }
