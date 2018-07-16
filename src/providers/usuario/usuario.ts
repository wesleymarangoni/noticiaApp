import { Injectable } from '@angular/core';
import 'rxjs/add/operator/map';
import { Storage } from '@ionic/storage';
import { DatePipe } from '@angular/common';

@Injectable()
export class UsuarioProvider {

  constructor(private storage: Storage, private datepipe: DatePipe) { }

  public insert(usuario: Usuario) {
    let key = this.datepipe.transform(new Date(), "ddMMyyyyHHmmss");
    return this.save(key, usuario);
  }

  public update(key: string, usuario: Usuario) {
    return this.save(key, usuario);
  }

  private save(key: string, usuario: Usuario) {
    return this.storage.set(key, usuario);
  }

  public remove(key: string) {
    return this.storage.remove(key);
  }

  public getAll() {

    let usuarios: UsuarioList[] = [];

    return this.storage.forEach((value: Usuario, key: string, iterationNumber: Number) => {
      let usuario = new UsuarioList();
      usuario.key = key;
      usuario.usuario = value;
      usuarios.push(usuario);
    })
      .then(() => {
        return Promise.resolve(usuarios);
      })
      .catch((error) => {
        return Promise.reject(error);
      });
  }
}

export class Usuario {
  nome: string;
  telefone: number;
  nascimento: Date;
  email: string;
  cpf: string;
}

export class UsuarioList {
  key: string;
  usuario: Usuario;
}
