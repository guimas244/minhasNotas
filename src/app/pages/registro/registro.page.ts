import { Usuario } from '../../modelos/usuario.modelo';
import { NavController, ToastController, LoadingController } from '@ionic/angular';
import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from 'angularfire2/auth';

@Component({
  selector: 'app-registro',
  templateUrl: './registro.page.html',
  styleUrls: ['./registro.page.scss'],
})
export class RegistroPage implements OnInit {
  usuario = {} as Usuario;
  constructor(public navControlador: NavController,
    private mensagemControler: ToastController,
    private autenticador: AngularFireAuth,
    private loadingControlador: LoadingController) { }

  ngOnInit() {
  }
  retornarLogin() {
    this.navControlador.navigateRoot('login');

  }

  async registrar(usuario: Usuario) {
    if (this.validationForm()) {
      let carregando = this.loadingControlador.create({
        message: 'Espere...'
      });
      (await carregando).present();

      try {
        await this.autenticador.auth.createUserWithEmailAndPassword(usuario.email, usuario.senha)
          .then(retorno => console.log(retorno));
        this.navControlador.navigateRoot('home');
      } catch (e) {
        this.mostrarMensagem(e);
      }
      (await carregando).dismiss();

    }
  }



  validationForm() {
    if (!this.usuario.email) {
      this.mostrarMensagem('Insira endereço de email!');
      return false;
    }
    if (!this.usuario.senha) {
      this.mostrarMensagem('Insira senha!');
      return false;
    }
    return true;
  }
  mostrarMensagem(mensagem: string) {
    this.mensagemControler.create({
      message: mensagem, duration: 3500
    }).then(ms => ms.present());
  }
}
