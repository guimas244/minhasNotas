import { Router, NavigationExtras } from '@angular/router';
import { DisciplinaService } from './../services/disciplina.service';
import { Component } from '@angular/core';
import { NavController, ToastController } from '@ionic/angular';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  disciplinas: Observable<any>;

  constructor(public navControlador: NavController, public router: Router,
    private service: DisciplinaService, private mensagemControler: ToastController, private rt: Router) {
    this.disciplinas = this.service.getAll();
  }

  novaDisciplina() {
    this.navControlador.navigateRoot('disciplina');
  }

  editarDisciplina(disciplina: any) {
    console.log('disciplina para editar', disciplina);
    const teste: NavigationExtras = { queryParams: { special: JSON.stringify(disciplina) } };
    this.router.navigate(['disciplina'], teste);
    // this.navControlador.
  }

  removerDisciplina(key: string) {

    this.service.remove(key)
      .then(() => {
        this.mensagemControler.create({ message: 'Disciplina removida com sucesso.', duration: 3000 }).finally();
        this.navControlador.pop();
      })
      .catch((e) => {
        this.mensagemControler.create({ message: 'Erro ao remover a disciplina.', duration: 3000 }).finally();
        console.error(e);
      });
  }
}
