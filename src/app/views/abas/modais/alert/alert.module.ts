import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { AlertComponent } from './alert.component';
import { SharedModule } from '../../../../core/shared.module';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [AlertComponent],
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SharedModule,
    RouterModule.forChild([
      {
        path: '',
        component: AlertComponent,
      },
    ]),
  ],
})
export class AlertModule {}
