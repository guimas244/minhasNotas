import { Component, OnInit } from '@angular/core';
import { NavigationExtras, Router } from '@angular/router';
import { NavController, ToastController } from '@ionic/angular';
import { Observable } from 'rxjs';
import { NotaService } from 'src/app/services/nota.service';

@Component({
  selector: 'app-list-nota',
  templateUrl: './list-nota.page.html',
  styleUrls: ['./list-nota.page.scss'],
})
export class ListNotaPage {
  notas: Observable<any>;

  title: string = 'Notas';
  constructor(public navControlador: NavController, public router: Router,
    private service: NotaService, private mensagemControler: ToastController) { }

  editarNota(disciplina: any) {
    const param: NavigationExtras = { queryParams: { nota: JSON.stringify(nota) } };
    this.router.navigate(['disciplina'], param);
  }


  retornarMenu() {
    this.navControlador.navigateRoot('home');
  }


  novaNota() {
    this.navControlador.navigateRoot('nota');
  }

  pesquisar() {
    this.notas = this.service.getAll();
  }
}
