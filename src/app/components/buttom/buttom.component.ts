import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-buttom',
  templateUrl: './buttom.component.html',
  styleUrls: ['./buttom.component.scss']
})
export class ButtomComponent implements OnInit {
<<<<<<< HEAD
  
  @Input() texto: string = "";
  @Input() tipo: string = "";
=======
  @Input() texto :string="";
  @Input() tipo: string="";
>>>>>>> 6b463b6d35173b5eb90d6d8379e1d0e111ca2f73
  constructor() { }

  ngOnInit(): void {
  }

}
