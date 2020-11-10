import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-nota',
  templateUrl: './nota.page.html',
  styleUrls: ['./nota.page.scss'],
})
export class NotaPage {
  formNota: FormGroup;
  nota: any;

  constructor(private fb: FormBuilder,public navControlador: NavController) {
    this.nota = {};
    console.log('estou construindo')
    this.setupPage();
   }

  private setupPage() {
    this.createForm();
  }
  createForm() {
    console.log('this.fb',this.fb)
    this.formNota = this.fb.group({
      key: [this.nota.key],
      valor: [this.nota.valor, Validators.required],
      professor: [this.nota.professor, Validators.required],
      observacao: [this.nota.observacao],
    });
    console.log('this.formNota',this.formNota)
  }
  retornarMenu(){
    this.navControlador.navigateRoot('list-disciplina');
  }
}
