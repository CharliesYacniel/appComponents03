import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-list-reorder',
  templateUrl: './list-reorder.page.html',
  styleUrls: ['./list-reorder.page.scss'],
})
export class ListReorderPage implements OnInit {
  data = [
    'Batman',
    'test',
    'Super 3',
    'Pikachu 4',
    'xD 5'
  ];
  constructor() { }

  ngOnInit() {
  }

  doReorder(event) {
    // console.log(event);
    const itemMove= this.data.splice(event.detail.from, 1)[0];
    this.data.splice(event.detail.to, 0, itemMove);
    event.detail.complete();
  }
  
  guardar() {
    console.log(this.data);
  }
}
