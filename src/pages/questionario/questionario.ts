import { Component, ViewChild } from '@angular/core';
import { NavController } from 'ionic-angular';
import { Data } from '../../providers/data/data';
import { HomePage } from '../home/home';
import { CasoEmTextoPage } from '../caso-em-texto/caso-em-texto';

@Component({
  selector: 'page-questionario',
  templateUrl: 'questionario.html'
})
export class QuestionarioPage {

  @ViewChild('slides') slides: any;
  
     hasAnswered: boolean = false;
     score: number = 0;
  
     slideOptions: any;
     questions: any;
  
     constructor(public navCtrl: NavController, public dataService: Data) {
  
     }
  
     ionViewDidLoad() {
  
         this.slides.lockSwipes(true);
  
         this.dataService.load().then((data) => {
  
             data.map((question) => {
  
                 let originalOrder = question.answers;
                 question.answers = this.randomizeAnswers(originalOrder);
                 return question;  
             });     
  
             this.questions = data;
  
         });
  
     }
  
     nextSlide(){
         this.slides.lockSwipes(false);
         this.slides.slideNext();
         this.slides.lockSwipes(true);
     }
      
     selectAnswer(answer, question){
  
         this.hasAnswered = true;
         answer.selected = true;
         
  
         if(answer.correct){
             this.score++;
         }
  
         setTimeout(() => {
             this.hasAnswered = false;
             this.nextSlide();
             answer.selected = false;
             
         }, 3000);
     }
  
     randomizeAnswers(rawAnswers: any[]): any[] {
  
         for (let i = rawAnswers.length - 1; i > 0; i--) {
             let j = Math.floor(Math.random() * (i + 1));
             let temp = rawAnswers[i];
             rawAnswers[i] = rawAnswers[j];
             rawAnswers[j] = temp;
         }
  
         return rawAnswers;  
     }
  
     restartQuiz() {
         this.score = 0;
         this.slides.lockSwipes(false);
         this.slides.slideTo(1, 1000);
         this.slides.lockSwipes(true);
         this.dataService.load().then((data) => {

             data.map((question) => {

                 let originalOrder = question.answers;
                 question.answers = this.randomizeAnswers(originalOrder);
                 return question;
             });

             this.questions = data;

         });
     }
     
    goToHome(params){
        if (!params) params = {};
        this.navCtrl.push(HomePage);
    }

    goToCasoTexto(params){
        if (!params) params = {};
        this.navCtrl.push(CasoEmTextoPage);
    }
  
}
