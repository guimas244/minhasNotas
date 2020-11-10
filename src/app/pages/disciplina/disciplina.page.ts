import { async } from '@angular/core/testing';
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
  testando: any;

  constructor(private fb: FormBuilder, public navControlador: NavController, private mensagemControler: ToastController,
    public navParams: NavParams, private service: DisciplinaService, public router: ActivatedRoute) {
    console.log('this.navParams.data ', this.navParams.data);
    this.disciplina = {};
    
    this.router.queryParams.subscribe(
      params => {
        if (params && params.disciplina) {
          console.log('special ', JSON.parse(params.disciplina));
          this.disciplina = JSON.parse(params.disciplina);
          console.log('disciplina com o special ', this.disciplina);
        }else{
          console.log('to no else');
          this.disciplina = {};
        }
        this.setupPage();
      }
    );
    
  }

  private setupPage() {
    this.title = this.disciplina.key ? 'Alterando Disciplina' : 'Nova disciplina';
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

  retornarMenu(){
    this.navControlador.navigateRoot('list-disciplina');
  }

}
