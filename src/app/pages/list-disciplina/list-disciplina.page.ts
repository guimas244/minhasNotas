import { Component } from '@angular/core';
import { NavigationExtras, Router } from '@angular/router';
import { NavController, ToastController } from '@ionic/angular';
import { Observable } from 'rxjs';
import { DisciplinaService } from 'src/app/services/disciplina.service';
@Component({
  selector: 'app-list-disciplina',
  templateUrl: './list-disciplina.page.html',
  styleUrls: ['./list-disciplina.page.scss'],
})
export class ListDisciplinaPage {
  disciplinas: Observable<any>;
  title: string = "Disciplinas"

  constructor(public navControlador: NavController, public router: Router, private service: DisciplinaService, private mensagemControler: ToastController) {
  }

  pesquisar() {
    console.log('log')
    this.disciplinas = this.service.getAll();
    console.log('estou com isso aqui ',this.disciplinas)
  }
  editarDisciplina(disciplina: any) {
    const param: NavigationExtras = { queryParams: { disciplina: JSON.stringify(disciplina) } };
    this.router.navigate(['disciplina'], param);
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
  retornarMenu() {
    this.navControlador.navigateRoot('home');
  }


}
