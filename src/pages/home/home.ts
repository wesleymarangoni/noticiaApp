import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';


@IonicPage()
@Component({
  selector: 'page-home',
  templateUrl: 'home.html',
})
export class HomePage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  public noticias=[
    {
      fonte:"CBN",	
      legenda:"Copa do Mundo",
      descricao:"Mesmo sem o Brasil, bares e restaurantes estão confiantes para o final da Copa",
      data:"13/07/2018"
    },
    {
      fonte:"UOL",	
      legenda:"EM 24 DE SETEMBRO",
      descricao:"Fifa convida garotos tailandeses para prêmio do melhor do mundo",
      data:"12/07/2018"
    },
    {
      fonte:"Globo.com",	
      legenda:"Temperatura",
      descricao:"SC volta a registrar a menor temperatura do ano no país: -6,7°C",
      data:"13/07/2018"
    },
    {
      fonte:"Bandnews",	
      legenda:"Trump not welcome!",
      descricao:"Protestos marcam a visita de Trump à Inglaterra",
      data:"13/07/2018"
    },
    {
      fonte:"Maringa.com",	
      legenda:"Esporte E Lazer",
      descricao:"Inscrições para 20ª Corrida do Alvorada encerram domingo (15)",
      data:"11/07/2018"
    }
  ]

}
