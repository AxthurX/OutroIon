import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { MapsComponent } from './maps.component';
import { SharedModule } from '../../../../core/shared.module';
import { IonicModule } from '@ionic/angular';
import { Geolocation } from '@ionic-native/geolocation/ngx';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [MapsComponent],
  providers: [Geolocation],
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SharedModule,
    RouterModule.forChild([
      {
        path: '',
        component: MapsComponent,
      },
    ]),
  ],
})
export class MapsModule {}
