import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ListaUsuarioPage } from './listaUsuario';

@NgModule({
  declarations: [
    ListaUsuarioPage,
  ],
  imports: [
    IonicPageModule.forChild(ListaUsuarioPage),
  ],
})
export class ListaUsuarioPageModule {}


