import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RegisterComponent } from './register/register.component';
import { HasanComponent } from './hasan/hasan.component';
import { MohamedComponent } from './mohamed/mohamed.component';

@NgModule({
  declarations: [
    AppComponent,
    RegisterComponent,
    HasanComponent,
    MohamedComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
