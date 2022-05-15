import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { MiComponente } from './components/mi-componente/mi-componente.component';
import { MenuComponent } from './components/menu/menu.component';
import { CardsComponent } from './components/cards/cards.component';
import { ButtomComponent } from './components/buttom/buttom.component';
import { SectionComponent } from './components/section/section.component';
import { FooterComponent } from './components/footer/footer.component';
import { HeaderComponent } from './components/header/header.component';
import { AppRoutingModule } from './app-routing.module';
import { PageHomeComponent } from './components/pages/page-home/page-home.component';
import { PageArtistComponent } from './components/pages/page-artist/page-artist/page-artist.component';
import { FormButtonComponent } from './components/form-button/form-button/form-button.component';
import { TableComponent } from './components/table/table/table.component';
import { FormArtistComponent } from './components/form-artist/form-artist/form-artist.component';
import { PageArtistCreateComponent } from './components/pages/page-artist-create/page-artist-create/page-artist-create.component';
@NgModule({
  declarations: [
    AppComponent,
    MiComponente,
    MenuComponent,
    CardsComponent,
    ButtomComponent,
    SectionComponent,
    FooterComponent,
    HeaderComponent,
    PageHomeComponent,
    PageArtistComponent,
    FormButtonComponent,
    TableComponent,
    FormArtistComponent,
    PageArtistCreateComponent
  ],
  imports: [
    BrowserModule, AppRoutingModule, HttpClientModule, FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
