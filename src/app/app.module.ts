import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RegisterComponent } from './register/register.component';
import { AimenComponent } from './aimen/aimen.component';
import { HasanComponent } from './hasan/hasan.component';
import { MohamedComponent } from './mohamed/mohamed.component';

@NgModule({
  declarations: [
    AppComponent,
    RegisterComponent,
    AimenComponent,
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
