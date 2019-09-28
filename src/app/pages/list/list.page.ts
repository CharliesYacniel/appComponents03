import { Component, OnInit, ViewChild } from '@angular/core';
import { DataService } from '../../service/data.service';
import { Observable } from 'rxjs';
import { IonList } from '@ionic/angular';

@Component({
  selector: 'app-list',
  templateUrl: './list.page.html',
  styleUrls: ['./list.page.scss'],
})
export class ListPage implements OnInit {
  @ViewChild('lista') lista: IonList;

  users: Observable<any> ;

  constructor(private dataService:DataService) { }

  ngOnInit() {
    // this.dataService.getUser().subscribe(data => {
    //   this.users = data;
    //   console.log(this.users);
    // }
    // );
    this.users = this.dataService.getUser();

  }

  like(user) {
    console.log('like', user);
    this.lista.closeSlidingItems();
  }
  delete(user) {
    console.log('delete', user);
    this.lista.closeSlidingItems();
  }
  favorit(user) {
    console.log('favorit', user);
    this.lista.closeSlidingItems();
  }
}
