import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { SharedModule } from '../../../../core/shared.module';
import { AvatarComponent } from './avatar.component';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [AvatarComponent],
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SharedModule,
    RouterModule.forChild([
      {
        path: '',
        component: AvatarComponent,
      },
    ]),
  ],
})
export class AvatarModule {}
