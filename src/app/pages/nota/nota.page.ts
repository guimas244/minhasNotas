import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { NavController } from '@ionic/angular';
import { Observable } from 'rxjs';
import { DisciplinaService } from 'src/app/services/disciplina.service';
import { NotaService } from 'src/app/services/nota.service';

@Component({
  selector: 'app-nota',
  templateUrl: './nota.page.html',
  styleUrls: ['./nota.page.scss'],
})
export class NotaPage {
  title: string;
  formNota: FormGroup;
  nota: any;
  disciplinas: Observable<any>;
  constructor(private fb: FormBuilder, public navControlador: NavController, private serviceDisciplina: DisciplinaService, private service: NotaService, public router: ActivatedRoute) {
    this.nota = {};
    this.router.queryParams.subscribe(
      params => {
        if (params && params.nota) {
          console.log('special ', JSON.parse(params.nota));
          this.nota = JSON.parse(params.nota);
          console.log('disciplina com o special ', this.nota);
        } else {
          console.log('to no else');
          this.nota = {};
        }
        this.setupPage();
      }
    );
  }

  private setupPage() {
    this.title = this.nota.key ? 'Alterando Nota' : 'Nova Nota';
    this.getListaDisciplinas();
    this.createForm();
  }

  getListaDisciplinas() {
    this.disciplinas = this.serviceDisciplina.getAll();
    console.log('this.disciplinas ', this.disciplinas)
  }
  createForm() {
    console.log('this.fb', this.fb)
    this.formNota = this.fb.group({
      key: [this.nota.key],
      valor: [this.nota.valor, Validators.required],
      professor: [this.nota.professor, Validators.required],
      observacao: [this.nota.observacao],
      disciplina_nome: [this.nota.disciplina_nome],
      disciplina_key: [this.nota.disciplina_key]

    });
  }
  retornarMenu() {
    this.navControlador.navigateRoot('list-nota');
  }

  // compareWith = this.compareWithFn;
  selecionaValor(key: any) {
    this.formNota.value.disciplina_key = key.detail.value.key;
    this.formNota.value.disciplina_nome = key.detail.value.nome;

    console.log('to aqui', key.detail.value.nome)
  }

  onSubmit() {
    console.log('form ', this.formNota);

    if (this.formNota.valid && this.formNota.value.disciplina_nome) {
      this.service.save(this.formNota.value)
        .then(() => {
          // this.mensagemControler.create({ message: 'Disciplina salvo com sucesso.', duration: 3000 }).finally();
          this.navControlador.pop();
          this.createForm();
        })
        .catch((e) => {
          // this.mensagemControler.create({ message: 'Erro ao salvar a disciplina.', duration: 3000 }).finally();
          console.error(e);
        });
    }
  }
}
