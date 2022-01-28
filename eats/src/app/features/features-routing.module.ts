import { NgModule, CUSTOM_ELEMENTS_SCHEMA,  NO_ERRORS_SCHEMA} from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AddMystereatBoxComponent } from './add-mystereat-box/add-mystereat-box.component';
import { BusinessregComponent } from './businessreg/businessreg.component';
import { ConsumerregComponent } from './consumerreg/consumerreg.component';
import { HomeComponent } from './home/home.component';
import { SelectoptionComponent } from './selectoption/selectoption.component';
import { SigninComponent } from './signin/signin.component';
import { StoreComponent } from './store/store.component';
import { StoreinfoComponent } from './storeinfo/storeinfo.component';
import { StorelistpageComponent } from './storelistpage/storelistpage.component';

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
  },
  {
    path: 'signin',
    component: SigninComponent
  },
  {
    path: 'addbox',
    component: AddMystereatBoxComponent
  },
  {
    path: 'store',
    component: StoreComponent
  },
  {
    path: 'storeinfo',
    component: StoreinfoComponent
  },
  {
    path: 'storelist',
    component: StorelistpageComponent
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
