import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { BotoesComponent } from './botoes.component';
import { SharedModule } from '../../../../core/shared.module';
import { RouterModule } from '@angular/router';

@NgModule({
  imports: [
    FormsModule,
    IonicModule,
    SharedModule,
    RouterModule.forChild([
      {
        path: '',
        component: BotoesComponent,
      },
    ]),
  ],
  declarations: [BotoesComponent],
})
export class BotoesModule {}
