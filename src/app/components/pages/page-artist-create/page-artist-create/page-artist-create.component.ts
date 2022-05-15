import { Component, OnInit } from '@angular/core';
import { Artista } from 'src/model/artista';

@Component({
  selector: 'app-page-artist-create',
  templateUrl: './page-artist-create.component.html',
  styleUrls: ['./page-artist-create.component.scss']
})
export class PageArtistCreateComponent implements OnInit {
  artista: Artista = { name: "", nacionality: ""};

  constructor() { }

  ngOnInit(): void {
  }

}
