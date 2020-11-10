import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { NavController } from '@ionic/angular';
import { Observable } from 'rxjs';
import { DisciplinaService } from 'src/app/services/disciplina.service';

@Component({
  selector: 'app-nota',
  templateUrl: './nota.page.html',
  styleUrls: ['./nota.page.scss'],
})
export class NotaPage {
  formNota: FormGroup;
  nota: any;
  disciplinas: Observable<any>;
  disciplinasSel: any;
  constructor(private fb: FormBuilder,public navControlador: NavController, private serviceDisciplina: DisciplinaService) {
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
      disciplina: [this.disciplinasSel]

    });
    console.log('this.formNota',this.formNota)
  }
  retornarMenu(){
    this.navControlador.navigateRoot('list-disciplina');
  }
}
