import { AngularFireAuth } from 'angularfire2/auth';
import { Usuario } from '../../modelos/usuario.modelo';
import { NavController, ToastController, LoadingController } from '@ionic/angular';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {
  usuario = {} as Usuario;

  constructor(public navControlador: NavController,
    private mensagemControler: ToastController,
    private autenticador: AngularFireAuth,
    private loadingControlador: LoadingController) { }

  ngOnInit() {
  }
  navRegistro() {
    this.navControlador.navigateRoot('registro');

  }

  async login(usr: Usuario) {
    if (this.validationForm()) {
      let carregando = this.loadingControlador.create({
        message: 'Espere...'
      });
      (await carregando).present();
      try {

        await this.autenticador.auth.signInWithEmailAndPassword(usr.email, usr.senha)
          .then(retorno => console.log('retorno login', retorno));
        this.navControlador.navigateRoot('home');
        (await carregando).dismiss();
      } catch (e) {
        this.mostrarMensagem(e);
        (await carregando).dismiss();
      }
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
