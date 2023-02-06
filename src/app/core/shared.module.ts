import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule, NavParams } from '@ionic/angular';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { BtnVoltarComponent } from './components/btn-voltar.component';

@NgModule({
  declarations: [BtnVoltarComponent, BtnVoltarComponent],
  imports: [CommonModule, IonicModule, ReactiveFormsModule, FormsModule],
  exports: [
    BtnVoltarComponent,
    CommonModule,
    ReactiveFormsModule,
    IonicModule,
    FormsModule,
    BtnVoltarComponent,
  ],
  providers: [NavParams],
})
export class SharedModule {}
