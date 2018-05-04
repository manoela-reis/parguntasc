import { Component, ViewChild} from '@angular/core';
import { NavController } from 'ionic-angular';
import { Data } from '../../providers/data/data';
import { QuestionarioPage } from '../questionario/questionario';
import { HomePage } from '../home/home';

@Component({
  selector: 'page-caso-em-texto',
  templateUrl: 'caso-em-texto.html'
})


export class CasoEmTextoPage {

  @ViewChild('slides') slides: any;

    casos: any;
    slideOptions: any;

  constructor(public navCtrl: NavController, public dataService: Data) {
    
  }
  ionViewDidLoad() {

    this.dataService.load2().then((data2) => {

      data2.map((caso) => {
        //console.log("aquiiiiiiiiiii");
        return caso;
  
      });

      this.casos = data2;

    });
  }
  goToQuestionario(params){
    if (!params) params = {};
    this.navCtrl.push(QuestionarioPage);
  }
  goToHome(params){
    if (!params) params = {};
    this.navCtrl.push(HomePage);
}
}
