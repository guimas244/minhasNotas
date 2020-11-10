import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
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
  formNota: FormGroup;
  nota: any;
  disciplinas: Observable<any>;
  
  disciplinaSelecionada: string;

  constructor(private fb: FormBuilder,public navControlador: NavController, private serviceDisciplina: DisciplinaService, private service: NotaService) {
    this.nota = {};
    console.log('estou construindo')
    this.setupPage();
   }

  private setupPage() {
    this.getListaDisciplinas();
    this.createForm();
  }

  getListaDisciplinas(){
    this.disciplinas = this.serviceDisciplina.getAll();
    console.log('this.disciplinas ', this.disciplinas)
  }
  createForm() {
    console.log('this.fb',this.fb)
    this.formNota = this.fb.group({
      key: [this.nota.key],
      valor: [this.nota.valor, Validators.required],
      professor: [this.nota.professor, Validators.required],
      observacao: [this.nota.observacao],
      disciplina_nome: [this.nota.disciplina_nome],
      disciplina_key: [this.nota.disciplina_key]

    });
    console.log('this.formNota',this.formNota)
  }
  retornarMenu(){
    this.navControlador.navigateRoot('list-disciplina');
  }

  // compareWith = this.compareWithFn;
  selecionaValor(key:any){
    this.formNota.value.disciplina_key = key.detail.value.key;
    this.formNota.value.disciplina_nome = key.detail.value.nome;

    console.log('to aqui', key.detail.value.nome)
  }

  onSubmit() {
    console.log('form ', this.formNota);

    if (this.formNota.valid && this.formNota.value.disciplina_nome) {
      console.log('')
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
