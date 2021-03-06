import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';

import { IonicStorageModule } from '@ionic/storage';
import { DatePipe } from '@angular/common';
import { UsuarioProvider } from '../providers/usuario/usuario';
import { ListaUsuarioPage } from '../pages/listaUsuario/listaUsuario';
import { ListaUsuarioPageModule } from '../pages/listaUsuario/listaUsuario.module';
import { ContatoPage } from '../pages/contato/contato';
import { SobrePage } from '../pages/sobre/sobre';
import { ContatoPageModule } from '../pages/contato/contato.module';
import { SobrePageModule } from '../pages/sobre/sobre.module';

@NgModule({
  declarations: [
    MyApp,
    HomePage,
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    IonicStorageModule.forRoot(),
    ListaUsuarioPageModule,
    ContatoPageModule,
    SobrePageModule

  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    ListaUsuarioPage,
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    DatePipe,
    UsuarioProvider,
  ]
})
export class AppModule {}
