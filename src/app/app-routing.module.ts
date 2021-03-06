import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)
  },
  {
    path: '',
    redirectTo: 'login',
    pathMatch: 'full'
  },
  {
    path: 'disciplina',
    loadChildren: () => import('./pages/disciplina/disciplina.module').then( m => m.DisciplinaPageModule)
  },
  {
    path: 'list-disciplina',
    loadChildren: () => import('./pages/list-disciplina/list-disciplina.module').then( m => m.ListDisciplinaPageModule)
  },
  {
    path: 'list-nota',
    loadChildren: () => import('./pages/list-nota/list-nota.module').then( m => m.ListNotaPageModule)
  },
  {
    path: 'nota',
    loadChildren: () => import('./pages/nota/nota.module').then( m => m.NotaPageModule)
  },
  {
    path: 'login',
    loadChildren: () => import('./pages/login/login.module').then( m => m.LoginPageModule)
  },
  {
    path: 'registro',
    loadChildren: () => import('./pages/registro/registro.module').then( m => m.RegistroPageModule)
  },

];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
