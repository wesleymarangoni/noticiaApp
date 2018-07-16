import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ToastController } from 'ionic-angular';
import { UsuarioProvider, Usuario } from '../../providers/usuario/usuario';

@IonicPage()
@Component({
  selector: 'page-edit-usuario',
  templateUrl: 'edit-usuario.html',
})
export class EditUsuarioPage {
  model: Usuario;
  key: string;


  public loginForm: any;
  messageEmail = ""
  messagePassword = "";
  errorEmail = false;
  errorPassword = false;

  constructor(public navCtrl: NavController, public navParams: NavParams, private usuarioProvider: UsuarioProvider, private toast: ToastController) {
    if (this.navParams.data.usuario && this.navParams.data.key) {
      this.model = this.navParams.data.usuario;
      this.key =  this.navParams.data.key;
    } else {
      this.model = new Usuario();
    }
  }



  save() {
    this.saveUsuario()
      .then(() => {
        this.toast.create({ message: 'Contato salvo.', duration: 3000, position: 'botton' }).present();
        this.navCtrl.pop();
      })
      .catch(() => {
        this.toast.create({ message: 'Erro ao salvar o contato.', duration: 3000, position: 'botton' }).present();
      });
  }

  private saveUsuario() {
    if (this.key) {
      
      return this.usuarioProvider.update(this.key, this.model);  
    } else {
      return this.usuarioProvider.insert(this.model);
    }
  }

}
