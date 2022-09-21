import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ComponentComponent } from './component/component.component';
import { ComponentsComponent } from './components/components.component';
import { HeaderComponent } from './components/header/header.component';
import { ButtonComponent } from './components/button/button.component';
import { MyselfComponent } from './components/myself/myself.component';
import { ButttonComponent } from './components/buttton/buttton.component';

@NgModule({
  declarations: [
    AppComponent,
    ComponentComponent,
    ComponentsComponent,
    HeaderComponent,
    ButtonComponent,
    MyselfComponent,
    ButttonComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
