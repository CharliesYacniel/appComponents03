import { Component, OnInit } from '@angular/core';
import { DataService } from '../../service/data.service';
import {Componente} from '../../interfaces/interfaces';

  import { from, Observable } from 'rxjs';
@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.page.html',
  styleUrls: ['./inicio.page.scss'],
})
export class InicioPage implements OnInit {

  componentes: Observable<Componente[]>;


  constructor(private dataService :DataService) { }

  ngOnInit() {
    this.componentes = this.dataService.getOptMenu();
  }

}

