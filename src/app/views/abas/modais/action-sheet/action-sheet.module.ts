import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { ActionSheetComponent } from './action-sheet.component';
import { SharedModule } from '../../../../core/shared.module';
import { RouterModule } from '@angular/router';
@NgModule({
  declarations: [ActionSheetComponent],
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SharedModule,
    RouterModule.forChild([
      {
        path: '',
        component: ActionSheetComponent,
      },
    ]),
  ],
})
export class ActionSheetModule {}
