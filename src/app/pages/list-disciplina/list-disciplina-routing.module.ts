import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ListDisciplinaPage } from './list-disciplina.page';

const routes: Routes = [
  {
    path: '',
    component: ListDisciplinaPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ListDisciplinaPageRoutingModule {}
