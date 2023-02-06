import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { Router } from '@angular/router';
import { MapsComponent } from './maps/maps.component';
import { OutroMapaComponent } from './outro-mapa/outro-mapa.component';
import { ActionSheetComponent } from './action-sheet/action-sheet.component';
import { AlertComponent } from './alert/alert.component';
import { AvatarComponent } from './avatar/avatar.component';
import { BotoesComponent } from './botoes/botoes.component';
import { CardComponent } from './card/card.component';
import { CheckComponent } from './check/check.component';
import { DateTimeComponent } from './date-time/date-time.component';
import { FabComponent } from './fab/fab.component';

@Component({
  selector: 'app-modais',
  templateUrl: './modais.component.html',
  styleUrls: ['./modais.component.scss'],
})
export class ModaisComponent implements OnInit {
  constructor(private modal: ModalController, private rota: Router) {}

  ngOnInit() {}

  async showTelaActionSheet() {
    const modal = await this.modal.create({
      component: ActionSheetComponent,
    });

    modal.onDidDismiss().then((dataReturned) => {
      if (dataReturned !== null) {
      }
    });

    return await modal.present();
  }

  async showTelaAlert() {
    const modal = await this.modal.create({
      component: AlertComponent,
    });

    modal.onDidDismiss().then((dataReturned) => {
      if (dataReturned !== null) {
      }
    });

    return await modal.present();
  }

  async showTelaAvatar() {
    const modal = await this.modal.create({
      component: AvatarComponent,
    });

    modal.onDidDismiss().then((dataReturned) => {
      if (dataReturned !== null) {
      }
    });

    return await modal.present();
  }

  async showTelaBotoes() {
    const modal = await this.modal.create({
      component: BotoesComponent,
    });

    modal.onDidDismiss().then((dataReturned) => {
      if (dataReturned !== null) {
      }
    });

    return await modal.present();
  }

  async showTelaCards() {
    const modal = await this.modal.create({
      component: CardComponent,
    });

    modal.onDidDismiss().then((dataReturned) => {
      if (dataReturned !== null) {
      }
    });

    return await modal.present();
  }

  async showTelaCheck() {
    const modal = await this.modal.create({
      component: CheckComponent,
    });

    modal.onDidDismiss().then((dataReturned) => {
      if (dataReturned !== null) {
      }
    });

    return await modal.present();
  }

  async showTelaDateTime() {
    const modal = await this.modal.create({
      component: DateTimeComponent,
    });

    modal.onDidDismiss().then((dataReturned) => {
      if (dataReturned !== null) {
      }
    });

    return await modal.present();
  }

  async showTelaFab() {
    const modal = await this.modal.create({
      component: FabComponent,
    });

    modal.onDidDismiss().then((dataReturned) => {
      if (dataReturned !== null) {
      }
    });

    return await modal.present();
  }

  async showTelaModal() {
    const modal = await this.modal.create({
      component: ModaisComponent,
    });

    modal.onDidDismiss().then((dataReturned) => {
      if (dataReturned !== null) {
      }
    });

    return await modal.present();
  }

  async showTelaMaps() {
    const modal = await this.modal.create({
      component: MapsComponent,
    });

    modal.onDidDismiss().then((dataReturned) => {
      if (dataReturned !== null) {
      }
    });

    return await modal.present();
  }

  async showTelaOutroMapa() {
    const modal = await this.modal.create({
      component: OutroMapaComponent,
    });

    modal.onDidDismiss().then((dataReturned) => {
      if (dataReturned !== null) {
      }
    });

    return await modal.present();
  }

  goTo(rota) {
    this.rota.navigateByUrl(rota);
  }
}
