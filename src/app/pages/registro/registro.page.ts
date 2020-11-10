import { NavController } from '@ionic/angular';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-registro',
  templateUrl: './registro.page.html',
  styleUrls: ['./registro.page.scss'],
})
export class RegistroPage implements OnInit {

  constructor(public navControlador: NavController) { }

  ngOnInit() {
  }
  retornarLogin(){
    this.navControlador.navigateRoot('login');

  }
}
