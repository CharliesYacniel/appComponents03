import { Component, OnInit, ViewChild } from '@angular/core';
import { DataService } from 'src/app/service/data.service';
import { IonSegment } from '@ionic/angular';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-segment',
  templateUrl: './segment.page.html',
  styleUrls: ['./segment.page.scss'],
})
export class SegmentPage implements OnInit {

 @ViewChild(IonSegment) segment: IonSegment;

 superHeroes: Observable<any>;
 
 valueSelect = '';

constructor(private dataSevice: DataService) { }

  ngOnInit() {
     this.segment.value = '';
     this.superHeroes = this.dataSevice.getSuperHeroes();
    //  console.log(this.superHeroes);
  }
  segmentChanged( event) {
    this.valueSelect = event.detail.value;
    console.log(this.valueSelect);
  }

}
