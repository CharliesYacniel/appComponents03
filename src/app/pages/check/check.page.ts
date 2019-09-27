import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-check',
  templateUrl: './check.page.html',
  styleUrls: ['./check.page.scss'],
})
export class CheckPage implements OnInit {

  constructor() { }
  
  public form = [
    { val: 'success', isChecked: true , color: 'success'},
    { val: 'Sausage', isChecked: false , color: 'primary'},
    { val: 'Mushroom', isChecked: false , color: 'primary'},
    { val: 'primary', isChecked: false, color: 'primary'},
    { val: 'secondary', isChecked: false, color: 'secondary'},
    { val: 'danger', isChecked: true, color: 'danger'},
    { val: 'light', isChecked: false, color: 'light'},
    { val: 'dark', isChecked: true, color: 'dark'}
  ];

  ngOnInit() {
  }
  onClick(checkitem){
   console.log(checkitem);
  }

}
