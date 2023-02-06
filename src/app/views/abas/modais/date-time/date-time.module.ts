import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { SharedModule } from '../../../../core/shared.module';
import { DateTimeComponent } from './date-time.component';
import { RouterModule } from '@angular/router';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SharedModule,
    RouterModule.forChild([
      {
        path: '',
        component: DateTimeComponent,
      },
    ]),
  ],
  declarations: [DateTimeComponent],
})
export class DateTimeModule {}
