import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AimenComponent } from './aimen/aimen.component';
import { MohamedComponent } from './mohamed/mohamed.component';
import { HasanComponent } from './hasan/hasan.component';
import { AlasekriComponent } from './alasekri/alasekri.component';
import { RegisterComponent } from './register/register.component';

const routes: Routes = [
  {
    path: 'aimen',
    component: AimenComponent
  },
  {
    path: 'malek',
    component: AlasekriComponent
  },
  {
    path: 'hasan',
    component: HasanComponent
  },
  {
    path: 'mohammed',
    component: MohamedComponent
  },
  {
    path: 'register',
    component: RegisterComponent
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
