import { NgModule, CUSTOM_ELEMENTS_SCHEMA,  NO_ERRORS_SCHEMA} from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BusinessregComponent } from './businessreg/businessreg.component';
import { ConsumerregComponent } from './consumerreg/consumerreg.component';
import { HomeComponent } from './home/home.component';
import { SelectoptionComponent } from './selectoption/selectoption.component';

const routes: Routes = [
  {path: '',
    component: HomeComponent
  },
  {
    path: 'selectoption',
    component: SelectoptionComponent
  },
  {
    path: 'reg-consumer',
    component: ConsumerregComponent
  },
  {
    path: 'reg-business',
    component: BusinessregComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
  schemas: [
    CUSTOM_ELEMENTS_SCHEMA,
    NO_ERRORS_SCHEMA
  ]
})
export class FeaturesRoutingModule { }
