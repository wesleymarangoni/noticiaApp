import { Component } from '@angular/core';


import { UsuarioProvider, Usuario, UsuarioList } from '../../providers/usuario/usuario';
import { IonicPage, NavController, ToastController } from 'ionic-angular';


@IonicPage()
@Component({
  selector: 'page-listaUsuario',
  templateUrl: 'listaUsuario.html',
})
export class ListaUsuarioPage {
  usuarios: UsuarioList[];
  constructor(public navCtrl: NavController, private usuarioProvider: UsuarioProvider, private toast: ToastController) {
  }

  ionViewDidEnter() {
    this.usuarioProvider.getAll()
      .then((result) => {
        this.usuarios = result;
      });
  }

  addUsuario() {
    this.navCtrl.push('EditUsuarioPage');
  }

  editUsuario(item: UsuarioList) {
    this.navCtrl.push('EditUsuarioPage', { key: item.key, usuario: item.usuario });
  }

  removeUsuario(item: UsuarioList) {
    this.usuarioProvider.remove(item.key)
      .then(() => {
        // Removendo do array de items
        var index = this.usuarios.indexOf(item);
        this.usuarios.splice(index, 1);
        this.toast.create({ message: 'Usuario removido.', duration: 3000, position: 'botton' }).present();
      })
  }
  
}


