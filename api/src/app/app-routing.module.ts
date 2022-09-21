import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CrudComponent } from './components/crud/crud.component';
import { SelfapiComponent } from './components/selfapi/selfapi.component';

const routes: Routes = [
  {
    path:"crud",
    component:CrudComponent
  },
  {
    path:"selfapi",
    component:SelfapiComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
