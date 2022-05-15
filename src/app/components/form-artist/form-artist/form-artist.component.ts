import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Artista } from 'src/model/artista';
import { ArtistaService } from 'src/app/services/artista/artista.service';


@Component({
  selector: 'app-form-artist',
  templateUrl: './form-artist.component.html',
  styleUrls: ['./form-artist.component.scss']
})
export class FormArtistComponent implements OnInit {
  
  @Input()
  artista: Artista = { name: "", nacionality: ""};

  constructor(private route: Router, private artistasService: ArtistaService) { }

  ngOnInit(): void {
  }
  onPressButton() {
    if (this.artista.id) {
      this.artistasService.updateArtista(this.artista).subscribe(response => {
        this.route.navigate(['/artistas']);
      });
    } else {
      this.artistasService.createArtista(this.artista).subscribe(response => {
        this.route.navigate(['/artistas']);
      });
    }   
  }

}
