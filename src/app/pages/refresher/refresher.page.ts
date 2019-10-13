import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-refresher',
  templateUrl: './refresher.page.html',
  styleUrls: ['./refresher.page.scss'],
})
export class RefresherPage implements OnInit {
  items:any;
  constructor() { }

  ngOnInit() {
  }
  doRefresh(event){
    console.log(event);
    setTimeout(() => {
      console.log('Async operation has ended');
      this.items=Array(30);
      event.target.complete();
    }, 2000);
  }
}
