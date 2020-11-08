import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-disciplina',
  templateUrl: './disciplina.page.html',
  styleUrls: ['./disciplina.page.scss'],
})
export class DisciplinaPage implements OnInit {
  title: string;
  form: FormGroup;
  disciplina: any;
  constructor(private fb: FormBuilder) { }

  ngOnInit() {
    console.log(this.fb)
  }
  createForm() {
    this.form = this.fb.group({
      key: [this.disciplina.key],
      nome: [this.disciplina.nome, Validators.required],
      ano: [this.disciplina.ano, Validators.required],
      observacao: [this.disciplina.observacao, Validators.required],
    });
  }
}
