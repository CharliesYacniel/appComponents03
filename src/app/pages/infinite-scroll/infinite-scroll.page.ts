import { Component, OnInit, ViewChild } from '@angular/core';
import { IonInfiniteScroll } from '@ionic/angular';

@Component({
  selector: 'app-infinite-scroll',
  templateUrl: './infinite-scroll.page.html',
  styleUrls: ['./infinite-scroll.page.scss'],
})
export class InfiniteScrollPage implements OnInit {
  @ViewChild(IonInfiniteScroll) infiniteScroll: IonInfiniteScroll;
  data : any[] = Array(20);
  constructor() {}

  loadData(event) {
    setTimeout(() => {
     console.log('lode more');
     const newArray = Array(20);
     event.target.complete();
     this.data.push(...newArray);
      if (this.data.length === 100) {
          event.target.disabled = true;
          this.infiniteScroll.disabled = true;
      }
    }, 1000);
  }

  toggleInfiniteScroll() {
    // this.infiniteScroll.disabled = !this.infiniteScroll.disabled;
  }

  ngOnInit() {
  }

}
