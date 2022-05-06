import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-buttom',
  templateUrl: './buttom.component.html',
  styleUrls: ['./buttom.component.scss']
})
export class ButtomComponent implements OnInit {
  
  @Input() texto: string = "";
  @Input() tipo: string = "";
  constructor() { }

  ngOnInit(): void {
  }

}
