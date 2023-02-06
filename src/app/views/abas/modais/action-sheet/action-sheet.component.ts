/* eslint-disable @angular-eslint/no-empty-lifecycle-method */
import { Component, OnInit } from '@angular/core';
import { ActionSheetController } from '@ionic/angular';

@Component({
  selector: 'app-action-sheet',
  templateUrl: './action-sheet.component.html',
  styleUrls: ['./action-sheet.component.scss'],
})
export class ActionSheetComponent implements OnInit {
  constructor(public actionSheetController: ActionSheetController) {}

  ngOnInit() {}

  async presentActionSheet() {
    const actionSheet = await this.actionSheetController.create({
      header: 'Albums',
      buttons: [
        {
          text: 'Apagar',
          role: 'destructive',
          icon: 'trash',
          cssClass: 'vermelho',
          handler: () => {
            console.log('Apagar foi clicado');
          },
        },
        {
          text: 'Compartilhar',
          icon: 'share',
          handler: () => {
            console.log('Compartilhar foi clicado');
          },
        },
        {
          text: 'Play(open modal)',
          icon: 'chevron-forward-circle',
          handler: () => {
            console.log('Play Foi clicado');
          },
        },
        {
          text: 'Favorito',
          icon: 'heart',
          handler: () => {
            console.log('Favorito foi clicado');
          },
        },
        {
          text: 'Cancelar',
          icon: 'close',
          role: 'cancel',
          handler: () => {
            console.log('Cancelar foi clicado');
          },
        },
      ],
    });
    await actionSheet.present();
  }
}
