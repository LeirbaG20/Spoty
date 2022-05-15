import { Component, Input, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { Router } from '@angular/router';
import { Observable, of } from 'rxjs';
import { Artista } from 'src/model/artista';
import { ArtistaService } from 'src/app/services/artista/artista.service';

@Component({
  selector: 'app-page-artist',
  templateUrl: './page-artist.component.html',
  styleUrls: ['./page-artist.component.scss']
})
export class PageArtistComponent implements OnInit {
  @Input()
  artista: Artista = { name: "", nacionality: ""};

  artistaList$: Observable<Artista[]> = of([]);

  constructor(private route: Router, private artistaService: ArtistaService, private titleService:Title) {
    this.titleService.setTitle("Artista List");
   }

  ngOnInit(): void {
    this.artistaList$ = this.artistaService.getArtistas();
  }

  goTo(path: string) {
    console.log(path);
    this.route.navigate([path]);
  }

}
