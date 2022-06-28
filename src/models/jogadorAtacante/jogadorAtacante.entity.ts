import { Jogador } from "../jogador/jogador.entity";

export class jogadorAtacante extends Jogador {
  private velocidade: number;
  private tecnica: number;

  calculo_atacante(jogador) {
    let velocidade = jogador.velocidade;
    let tecnica = jogador.tecnica;

    jogador.score = velocidade * 6 + tecnica * 4;
    console.log(jogador.score);
    return jogador.score;
  }
}
