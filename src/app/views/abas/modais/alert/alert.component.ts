import { Component, OnInit } from '@angular/core';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-alert',
  templateUrl: './alert.component.html',
  styleUrls: ['./alert.component.scss'],
})
export class AlertComponent implements OnInit {
  titulo: string;

  constructor(public alertCtrl: AlertController) {}

  ngOnInit() {}

  async presentInput() {
    const input = await this.alertCtrl.create({
      header: 'Input',
      subHeader: 'Digite seu nome:',
      inputs: [
        {
          name: 'txtNome',
          type: 'text',
          placeholder: 'nome',
        },
      ],
      buttons: [
        {
          text: 'Cancelar',
          role: 'cancel',
          cssClass: 'secondary',
          handler: () => {
            console.log('Confirme Cancelar');
          },
        },
        {
          text: 'OK',
          handler: (data) => {
            console.log('Confirme OK', data);
            this.titulo = data.txtNome;
          },
        },
      ],
    });

    await input.present();
  }

  async presentAlert() {
    const alert = await this.alertCtrl.create({
      header: 'Alert',
      subHeader: 'Subtitulo',
      message: 'Isso é uma menssagem de alerta.',
      animated: true,
      buttons: [
        {
          text: 'Cancelar',
          role: 'cancel',
          cssClass: 'secondary',
          handler: (blah) => {
            console.log('Cancelar');
          },
        },
        {
          text: 'OK',
          handler: () => {
            console.log('OK');
          },
        },
      ],
    });
    await alert.present();
  }
}
