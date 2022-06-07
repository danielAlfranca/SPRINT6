import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { EscenaComponent } from './components/escena/escena.component';
import { ButtonsComponent } from './components/buttons/buttons.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    EscenaComponent,
    ButtonsComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
