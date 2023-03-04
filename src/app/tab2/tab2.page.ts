import { Component } from '@angular/core';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page {
  valendo = 1;
  pontuacaoTime1 = 0;
  pontuacaoTime2 = 0;
  vitoriasTime1 = 0;
  vitoriasTime2 = 0;


  constructor() { }

  valorum() {
    this.valendo = 1
  }
  truco() {
    this.valendo = 3
  }
  seis() {
    this.valendo = 6
  }
  nove() {
    this.valendo = 9
  }
  doze() {
    this.valendo = 12
  }

  adicaoPlacarTime1() {
    if (this.pontuacaoTime1 <= 11) {
      this.pontuacaoTime1 = this.pontuacaoTime1 + this.valendo
      this.valendo = 1
    } else if (this.pontuacaoTime1 >= 11) {
      alert("Partida encerrada! Vitória do time 1");
      this.vitoriasTime1 = this.vitoriasTime1 + 1
      this.pontuacaoTime1 = 0
      this.pontuacaoTime2 = 0
    }
  }

  adicaoPlacarTime2() {
    if (this.pontuacaoTime2 <= 11) {
      this.pontuacaoTime2 = this.pontuacaoTime2 + this.valendo
      this.valendo = 1
    } else {
      alert("Partida encerrada! Vitória do time 2");
      this.vitoriasTime2 = this.vitoriasTime2 + 1
      this.pontuacaoTime1 = 0
      this.pontuacaoTime2 = 0
    }

  }

  diminuirPlacarTime1() {
    if (this.pontuacaoTime1 <= 0 ){
      this.pontuacaoTime1 = 0
    } else {
      this.pontuacaoTime1 = this.pontuacaoTime1 - this.valendo
      this.valendo = 1
    }
  }

  diminuirPlacarTime2() {
    if (this.pontuacaoTime2 <= 0 ){
      this.pontuacaoTime2 = 0
    } else {
      this.pontuacaoTime2 = this.pontuacaoTime2 - this.valendo
      this.valendo = 1
    }
  }

  limparTudo() {
    this.valendo = 1;
    this.pontuacaoTime1 = 0;
    this.pontuacaoTime2 = 0;
    this.vitoriasTime1 = 0;
    this.vitoriasTime2 = 0;

  }

}
