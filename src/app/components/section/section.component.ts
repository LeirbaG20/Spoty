import { Component, OnInit } from '@angular/core';
import { Track } from 'src/model/track';

@Component({
  selector: 'app-section',
  templateUrl: './section.component.html',
  styleUrls: ['./section.component.scss']
})
export class SectionComponent implements OnInit {

  listNov: Track[] = [
    {
        title: 'Pop',
        img: '../img/pop-music.png'
    },
    {
        title: 'Rock',
        img: '../img/rock-music.png'
    },
    {
        title: 'House',
        img: '../img/house-music.png'
    },

]
listUrb: Track[] = [
  {
      title: 'Rap',
      img: '../img/rap-music.png'
  },
  {
      title: 'Reggaeton',
      img: '../img/reggaeton-music.png'
  },
  {
      title: 'Trap',
      img: '../img/trap-music.png'
  },

]


  constructor() { }

  ngOnInit(): void {
  }

}
