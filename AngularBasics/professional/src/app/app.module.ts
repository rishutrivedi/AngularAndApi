import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { EmployeeComponent } from './components/employee/employee.component';
import { EmployeeItemComponent } from './components/employee-item/employee-item.component';
import { HeaderComponent } from './components/header/header.component';
import { ButtonComponent } from './components/button/button.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { AddEmpoloyComponent } from './components/add-empoloy/add-empoloy.component';
import { AboutComponent } from './components/about/about.component';
import { Routes,RouterModule } from '@angular/router';

const appRoutes:Routes=[{path:'',component:EmployeeComponent},
{path:'about',component:AboutComponent}]

@NgModule({
  declarations: [
    AppComponent,
    EmployeeComponent,
    EmployeeItemComponent,
    HeaderComponent,
    ButtonComponent,
    AddEmpoloyComponent,
    AboutComponent
  ],
  imports: [
    BrowserModule,
    FontAwesomeModule,
    HttpClientModule,
    FormsModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
