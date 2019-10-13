import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-progres-bar',
  templateUrl: './progres-bar.page.html',
  styleUrls: ['./progres-bar.page.scss'],
})
export class ProgresBarPage implements OnInit {
  porcentaje:any;
  constructor() { }

  ngOnInit() {
  }
  cambioValor(event){
    // console.log(event);
    this.porcentaje=(event.detail.value)/(100);
  }
}
