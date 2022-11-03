import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProdectComponent } from './component/prodect/prodect.component';
import { AboutComponent } from './component/about/about.component';
import { ContactComponent } from './component/contact/contact.component';
import { HomeComponent } from './component/home/home.component';
import { LaptopComponent } from './component/prodect/laptop/laptop.component';
import { TvComponent } from './component/prodect/tv/tv.component';
import { MobileComponent } from './component/prodect/mobile/mobile.component';
import { WashingMachineComponent } from './component/prodect/washing-machine/washing-machine.component';
import { CrudComponent } from './component/crud/crud.component';
import { CrudOperationComponent } from './component/crud-operation/crud-operation.component';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { FormarrayComponent } from './component/formarray/formarray.component';
import { FormValidationComponent } from './component/form-validation/form-validation.component';

@NgModule({
  declarations: [
    AppComponent,
    ProdectComponent,
    AboutComponent,
    ContactComponent,
    HomeComponent,
    LaptopComponent,
    TvComponent,
    MobileComponent,
    WashingMachineComponent,
    CrudComponent,
    CrudOperationComponent,
    FormarrayComponent,
    FormValidationComponent,
   
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    FormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
