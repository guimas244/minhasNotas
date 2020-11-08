import { DisciplinaService } from './../../services/disciplina.service';
import { NavController, NavParams, ToastController } from '@ionic/angular';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-disciplina',
  templateUrl: './disciplina.page.html',
  styleUrls: ['./disciplina.page.scss']

})
export class DisciplinaPage {
  title: string;
  formulario: FormGroup;
  disciplina: any;


  private service: DisciplinaService;

  constructor(private fb: FormBuilder, public navControlador: NavController, private mensagemControler: ToastController,
    public navParams: NavParams) {
    this.disciplina = this.navParams.data.disciplina || {};
    this.setupPage();
  }

  private setupPage() {
    this.title = this.navParams.data.disciplina ? 'Alterando Disciplina' : 'Nova disciplina';
    this.createForm();
  }

  createForm() {
    this.formulario = this.fb.group({
      key: [this.disciplina.key],
      nome: [this.disciplina.nome, Validators.required],
      ano: [this.disciplina.ano, Validators.required],
      observacao: [this.disciplina.observacao, Validators.required],
    });
  }

  onSubmit(){
    console.log(this.formulario);
  }
}
