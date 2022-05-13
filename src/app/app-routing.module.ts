import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PageArtistComponent } from './components/pages/page-artist/page-artist/page-artist.component';
import { PageHomeComponent } from './components/pages/page-home/page-home.component';

const routes: Routes = [
  { path: '', component: PageHomeComponent},
  { path: 'artist', component: PageArtistComponent},
  // { path: 'artist/create', component: },


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
