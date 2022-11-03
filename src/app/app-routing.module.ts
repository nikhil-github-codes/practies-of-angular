import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './component/about/about.component';
import { ContactComponent } from './component/contact/contact.component';
import { CrudOperationComponent } from './component/crud-operation/crud-operation.component';
import { CrudComponent } from './component/crud/crud.component';
import { FormValidationComponent } from './component/form-validation/form-validation.component';
import { FormarrayComponent } from './component/formarray/formarray.component';
import { HomeComponent } from './component/home/home.component';
import { LaptopComponent } from './component/prodect/laptop/laptop.component';
import { MobileComponent } from './component/prodect/mobile/mobile.component';
import { ProdectComponent } from './component/prodect/prodect.component';
import { TvComponent } from './component/prodect/tv/tv.component';
import { WashingMachineComponent } from './component/prodect/washing-machine/washing-machine.component';

const routes: Routes = [
  {path:"",redirectTo:"home",pathMatch:"full"},
  {path:"home",component:HomeComponent},
 {path:"product",component:ProdectComponent,children:[
 // {path:"",component:ProdectComponent},
  {path:"mobile",component:MobileComponent},
  {path:"laptop",component:LaptopComponent},
  {path:"tv",component:TvComponent},
  {path:"washing-machine",component:WashingMachineComponent}
 ]},
 {path:"about",component:AboutComponent},
 {path:"contact",component:ContactComponent},
 {path:"crud",component:CrudComponent},
 {path:"crud-operation",component:CrudOperationComponent},
 {path:"formarray",component:FormarrayComponent},
 {path:"formvalidation",component:FormValidationComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }