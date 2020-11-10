import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ListDisciplinaPageRoutingModule } from './list-disciplina-routing.module';

import { ListDisciplinaPage } from './list-disciplina.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ListDisciplinaPageRoutingModule
  ],
  declarations: [ListDisciplinaPage]
})
export class ListDisciplinaPageModule {}
