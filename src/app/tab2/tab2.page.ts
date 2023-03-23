import { Component } from '@angular/core';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page {


valor= 1;
pont1 = 0;
pont2 = 0;
vit1= 0;
vit2= 0;



  constructor() {}

 exibirNumero1() {

  this.valor = 1;

  }

  exibirNumero3(){

    this.valor = 3;

  }

  exibirNumero6(){

    this.valor = 6;

  }

  exibirNumero9(){

    this.valor = 9;

  }

  exibirNumero12(){

    this.valor = 12;

  }

  adicionarSoma1(){

    this.pont1 += this.valor;
    this.valor =1;
    if (this.pont1 >= 12) {
      this.vit1 += 1;
      this.pont1 = 0;
      this.pont2 = 0;

  }

}

adicionarSoma2(){

  this.pont2 += this.valor;
  this.valor =1;
  if (this.pont2 >= 12) {
    this.vit2 += 1;
    this.pont1 = 0;
    this.pont2 = 0;

}

}

subt1(){
if (this.pont1 >= 1)
    {
      this.pont1 -= this.valor;


    }

}

subt2(){
if (this.pont2 >= 1)
    {
      this.pont2 -= this.valor;

    }
}

limpar(){

 this.valor = 1;
 this.pont1 = 0;
 this.pont2 = 0;
 this.vit1 = 0;
 this.vit2 = 0;

}

}


