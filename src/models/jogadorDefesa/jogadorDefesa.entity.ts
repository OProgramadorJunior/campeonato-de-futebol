import { Jogador } from "../jogador/jogador.entity";
export class jogadorDefesa extends Jogador {
  cobertura: number;
  desarme: number;

  calculo_defensor(jogador) {
    let cobertura = jogador.cobertura;
    let desarme = jogador.desarme;

    jogador.score = cobertura * 6 + desarme * 4;
    console.log(jogador.score);
    return jogador.score;
  }
}
