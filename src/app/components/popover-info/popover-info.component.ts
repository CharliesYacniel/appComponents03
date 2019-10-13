import { Component, OnInit } from '@angular/core';
import { PopoverController } from '@ionic/angular';

@Component({
  selector: 'app-popover-info',
  templateUrl: './popover-info.component.html',
  styleUrls: ['./popover-info.component.scss']
})
export class PopoverInfoComponent implements OnInit {
  
  items = Array(20);

  constructor(private popoverController:PopoverController) { }

  ngOnInit() {}

  dismissPopover() {
    this.popoverController.dismiss();
  }

  detailsItem(index) {
    console.log(index);
      this.popoverController.dismiss({
        item: index
      });
  }
}
