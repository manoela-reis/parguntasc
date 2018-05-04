import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';
 
@Injectable()
export class Data {
 
    data: any;
    data2:any;
 
    constructor(public http: Http) {
 
    }
 
    load(){
 
        if(this.data){
            return Promise.resolve(this.data);
        }
 
        return new Promise(resolve => {
 
            this.http.get('assets/data/questions.json').map(res => res.json()).subscribe(data => {
                this.data = data.questions;
                resolve(this.data);
            });
 
        });
 
    }

    load2() {

        if (this.data2) {
            return Promise.resolve(this.data2);
        }

        return new Promise(resolve => {

            this.http.get('assets/data/casos.json').map(res => res.json()).subscribe(data2 => {
                this.data2 = data2.casos;
                resolve(this.data2);
                console.log("aquiiiiiiiiiii");
            });

        });

    }

}