import { Component, OnInit } from '@angular/core';
import { ModalInfoPage } from '../modal-info/modal-info.page';
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.page.html',
  styleUrls: ['./modal.page.scss'],
})
export class ModalPage implements OnInit {

  constructor(public modalController: ModalController) { }

  ngOnInit() {
  }
  
  async abrirModal() {
     const modal = await this.modalController.create({
                  component: ModalInfoPage,
                  componentProps: {
                    firstName: 'Charlies',
                    lastName: 'Yacniel',
                    // middleInitial: 'N'
                  }
                });
    await modal.present();

    const {data} = await modal.onDidDismiss();
    console.log('Retorno del modal', data || 'No retorno parametros');
  }

}
