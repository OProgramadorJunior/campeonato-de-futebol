import { Jogador } from "../jogador/jogador.entity";
export class JogadorGoleiro extends Jogador {
  private altura: number;

  private reflexo: number;

  public constructor(
    pAltura: number,
    pReflexo: number,
    pNome: string,
    pData: string,
    pCamisa: number
  ) {
    super(pNome, pData, pCamisa);
    this.altura = this.pontuacaoAltura(pAltura);
    this.reflexo = this.reflexoPontos(pReflexo);
    this.setHabilidade();
    this.setFuncao();
  }

  public setAltura(pAltura: number) {
    this.altura = this.pontuacaoAltura(pAltura);
  }

  public setReflexo(pReflexo: number) {
    this.reflexo = this.reflexoPontos(pReflexo);
}

  public setHabilidade() {
    this.habilidade = this.altura * 4 + this.reflexo * 6;
  }

  public setFuncao() {
    this.funcao = "Goleiro";
  }

  public getAltura(): number {
    return this.altura;
  }

  public getReflexo(): number {
    return this.reflexo;
  }

  private pontuacaoAltura(pAltura: number): number {
    if (pAltura > 210) {
      return Math.round(210 * (100 / 210));
    } else if (pAltura <= 210 && pAltura >= 0) {
      return Math.round(pAltura * (100 / 210));
    } else {
      return 0;
    }
  }

  private reflexoPontos(pReflexo: number): number {
    if (pReflexo < 0) {
      return 0;
    } else if (pReflexo > 100) {
      return 100;
    } else {
      return pReflexo;
    }
  }
}
