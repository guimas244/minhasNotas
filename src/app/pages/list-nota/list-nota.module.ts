import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ListNotaPageRoutingModule } from './list-nota-routing.module';

import { ListNotaPage } from './list-nota.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ListNotaPageRoutingModule
  ],
  declarations: [ListNotaPage]
})
export class ListNotaPageModule {}
