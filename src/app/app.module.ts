import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { MiComponente } from './components/mi-componente/mi-componente.component';
import { MenuComponent } from './components/menu/menu.component';
import { CardsComponent } from './components/cards/cards.component';
import { ButtomComponent } from './components/buttom/buttom.component';

@NgModule({
  declarations: [
    AppComponent,
    MiComponente,
    MenuComponent,
    CardsComponent,
    ButtomComponent,
    

  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
