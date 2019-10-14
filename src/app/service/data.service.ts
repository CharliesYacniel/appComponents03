import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Componente } from '../interfaces/interfaces';
import { delay } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class DataService {
   
  constructor( private httpClient:HttpClient) { }

  getOptMenu() {
    return this.httpClient.get<Componente[]>('/assets/menu.json');
    }

  getUser() {
  return this.httpClient.get('https://jsonplaceholder.typicode.com/users');
  }
  getAlbums() {
    return this.httpClient.get<any[]>('https://jsonplaceholder.typicode.com/albums');
    }
  getSuperHeroes() {
      return this.httpClient.get<[any]>('/assets/superheroes.json')
             .pipe(
               delay(3000)
             );
      }
}
