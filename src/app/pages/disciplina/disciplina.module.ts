import { AppComponent } from './../../app.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { DisciplinaPageRoutingModule } from './disciplina-routing.module';

import { DisciplinaPage } from './disciplina.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ReactiveFormsModule,
    FormsModule,
    DisciplinaPageRoutingModule
  ],
  declarations: [DisciplinaPage]
})
export class DisciplinaPageModule {}
