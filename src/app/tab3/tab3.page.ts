import { Component } from '@angular/core';

@Component({
  selector: 'app-tab3',
  templateUrl: 'tab3.page.html',
  styleUrls: ['tab3.page.scss']
})
export class Tab3Page {

  valorAtual = 0;
  tamanho = 6;
  imgsDados =['assets/dice-red.png', 'assets/dice.gif']
  imagemDado = this.imgsDados[0];

  jogarDado()
  {
    this.imagemDado = this.imgsDados[1]
    this.valorAtual = 0
    setTimeout(() => {
      this.valorAtual = Math.floor(Math.random() * this.tamanho ) + 1;
  }, 2000);
  }

  constructor() {}

}
