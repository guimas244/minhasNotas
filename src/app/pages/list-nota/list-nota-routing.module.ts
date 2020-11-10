import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ListNotaPage } from './list-nota.page';

const routes: Routes = [
  {
    path: '',
    component: ListNotaPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ListNotaPageRoutingModule {}
