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

  constructor(public navControlador: NavController, private service: DisciplinaService, private mensagemControler: ToastController) {
    this.disciplinas = this.service.getAll();
  }

  novaDisciplina() {
    this.navControlador.navigateRoot('disciplina');
  }

  editarDisciplina(disciplina: any) {
    console.log('disciplina para editar', disciplina);
    this.navControlador.navigateForward('disciplina', disciplina);
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
