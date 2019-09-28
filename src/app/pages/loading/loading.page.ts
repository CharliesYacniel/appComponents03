import { Component, OnInit } from '@angular/core';
import { LoadingController } from '@ionic/angular';

@Component({
  selector: 'app-loading',
  templateUrl: './loading.page.html',
  styleUrls: ['./loading.page.scss'],
})
export class LoadingPage implements OnInit {
  loading: any;
  mensaje: string;
  constructor(public loadingCtrl: LoadingController) {}
  ngOnInit(){
    this.presentLoading('Espera por favor');

    setTimeout(() => {
      this.loading.dismiss();
      this.mensaje = 'ya puedes salir de esta pantalla. Gracias';
    }, 5000);
  }


    async presentLoading(message: string) {
      this.loading = await this.loadingCtrl.create({
        message
        });
      return  this.loading.present();
    }
  

  }