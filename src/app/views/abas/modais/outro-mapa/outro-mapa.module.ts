import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { OutroMapaComponent } from './outro-mapa.component';
import { IonicModule } from '@ionic/angular';
import { Geolocation } from '@ionic-native/geolocation/ngx';
import { Routes, RouterModule } from '@angular/router';
import { SharedModule } from 'src/app/core/shared.module';

@NgModule({
  declarations: [OutroMapaComponent],
  providers: [Geolocation],
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SharedModule,
    RouterModule.forChild([
      {
        path: '',
        component: OutroMapaComponent,
      },
    ]),
  ],
})
export class OutroMapaModule {}
