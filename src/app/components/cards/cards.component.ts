import { Component, Input, OnInit } from '@angular/core';
import { Track } from 'src/model/track';

@Component({
  selector: 'app-cards',
  templateUrl: './cards.component.html',
  styleUrls: ['./cards.component.scss']
})
export class CardsComponent implements OnInit {
  @Input() track?: Track;
  constructor() { }

  ngOnInit(): void {
  }

}
