import { DisciplinaService } from './../../services/disciplina.service';
import { NavController, NavParams, ToastController } from '@ionic/angular';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-disciplina',
  templateUrl: './disciplina.page.html',
  styleUrls: ['./disciplina.page.scss']

})
export class DisciplinaPage {
  title: string;
  formulario: FormGroup;
  disciplina: any;

  constructor(private fb: FormBuilder, public navControlador: NavController, private mensagemControler: ToastController,
    public navParams: NavParams, private service: DisciplinaService, public router: ActivatedRoute) {
    console.log('this.navParams.data ', this.navParams.data);
    this.disciplina = {};
    this.router.queryParams.subscribe(
      params => {
        if (params && params.special) {
          console.log('special ', JSON.parse(params.special));
          this.disciplina = JSON.parse(params.special);
          console.log('disciplina com o special ', this.disciplina);
        }
      }
    );
    this.setupPage();
  }

  private setupPage() {
    this.title = this.navParams.data.disciplina ? 'Alterando Disciplina' : 'Nova disciplina';
    this.createForm();
  }

  createForm() {
    console.log('disciplina ', this.disciplina);
    this.formulario = this.fb.group({
      key: [this.disciplina.key],
      nome: [this.disciplina.nome, Validators.required],
      ano: [this.disciplina.ano, Validators.required],
      observacao: [this.disciplina.observacao],
    });
  }
  onSubmit() {
    console.log('form ', this.formulario);
    if (this.formulario.valid) {
      this.service.save(this.formulario.value)
        .then(() => {
          this.mensagemControler.create({ message: 'Disciplina salvo com sucesso.', duration: 3000 }).finally();
          this.navControlador.pop();
          this.createForm();
        })
        .catch((e) => {
          this.mensagemControler.create({ message: 'Erro ao salvar a disciplina.', duration: 3000 }).finally();
          console.error(e);
        });
    }
  }
}
