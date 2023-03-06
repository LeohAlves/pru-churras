import { Component } from '@angular/core';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss'],
})
export class Tab2Page {
  valendo = 1;
  pontuacaoTime1 = 0;
  pontuacaoTime2 = 0;
  vitoriasTime1 = 0;
  vitoriasTime2 = 0;

  constructor() {}

  valorum() {
    this.valendo = 1;
  }
  truco() {
    this.valendo = 3;
  }
  seis() {
    this.valendo = 6;
  }
  nove() {
    this.valendo = 9;
  }
  doze() {
    this.valendo = 12;
  }

  adicaoPlacarTime1() {
    this.pontuacaoTime1 = this.pontuacaoTime1 + this.valendo;
    this.valendo = 1;
    if (this.pontuacaoTime1 >= 12) {
      this.pontuacaoTime1 = 0;
      this.pontuacaoTime2 = 0;
      alert('Partida encerrada! Vitória do Time 1!');
      this.vitoriasTime1 = this.vitoriasTime1 + 1;
    }
  }

  adicaoPlacarTime2() {
    this.pontuacaoTime2 = this.pontuacaoTime2 + this.valendo;
    this.valendo = 1;
    if (this.pontuacaoTime2 >= 12) {
      this.pontuacaoTime1 = 0;
      this.pontuacaoTime2 = 0;
      alert('Partida encerrada! Vitória do Time 2!');
      this.vitoriasTime2 = this.vitoriasTime2 + 1;
    }
  }

  diminuirPlacarTime1() {
    this.pontuacaoTime1 = this.pontuacaoTime1 - this.valendo;
    this.valendo = 1;
    if (this.pontuacaoTime1 <= 0) {
      this.pontuacaoTime1 = 0;
    }
  }

  diminuirPlacarTime2() {
    this.pontuacaoTime2 = this.pontuacaoTime2 - this.valendo;
    this.valendo = 1;
    if (this.pontuacaoTime2 <= 0) {
      this.pontuacaoTime2 = 0;
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
