import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PageHomeComponent } from './components/pages/page-home/page-home.component';
import { PageSongComponent } from './components/pages/page-song/page-song.component';

const routes: Routes = [
  { path: '', component: PageHomeComponent},
  { path: 'song', component: PageSongComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
