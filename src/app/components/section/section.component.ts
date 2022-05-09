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
        img: '../../../assets/img/pop-music.png'
    },
    {
        title: 'Rock',
        img: '../../../assets/img/rock-music.png'
    },
    {
        title: 'House',
        img: '../../../assets/img/house-music.png'
    },

]
listUrb: Track[] = [
  {
      title: 'Rap',
      img: '../../../assets/img/rap-music.png'
  },
  {
      title: 'Reggaeton',
      img: '../../../assets/img/reggaeton-music.png'
  },
  {
      title: 'Trap',
      img: '../../../assets/img/trap-music.png'
  },

]


  constructor() { }

  ngOnInit(): void {
  }

}
