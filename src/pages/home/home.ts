import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { BancoDeCasosPage } from '../banco-de-casos/banco-de-casos';
import { QuestionarioPage } from '../questionario/questionario';
import { CasoEmTextoPage } from '../caso-em-texto/caso-em-texto';
@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(public navCtrl: NavController) {
  }
  goToBancoDeCasos(params){
    if (!params) params = {};
    this.navCtrl.push(BancoDeCasosPage);
  }
  goToQuestionario(params){
    if (!params) params = {};
    this.navCtrl.push(QuestionarioPage);
  }
  goToCasoTexto(params){
    if (!params) params = {};
    this.navCtrl.push(CasoEmTextoPage);
}
}
