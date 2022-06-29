import { Jogador } from "../jogador/jogador.entity";
export class JogadorAtacante extends Jogador {
  private velocidade: number;

  private tecnica: number;

  public constructor(
    pVelocidade: number,
    pTecnica: number,
    pNome: string,
    pData: string,
    pCamisa: number
  ) {
    super(pNome, pData, pCamisa);
    this.velocidade = this.Pontos(pVelocidade);
    this.tecnica = this.Pontos(pTecnica);
    this.setHabilidade();
    this.setFuncao();
  }

  public setVelocidade(velocidade: number) {
    this.velocidade = this.Pontos(velocidade);
  }

  public setTecnica(tecnica: number) {
    this.tecnica = this.Pontos(tecnica);
  }

  public setHabilidade() {
    this.habilidade = this.velocidade * 4 + this.tecnica * 6;
  }

  public setFuncao() {
    this.funcao = "Atacante";
  }

  public getVelocidade(): number {
    return this.velocidade;
  }

  public getTecnica(): number {
    return this.tecnica;
  }

  private Pontos(pontos: number): number {
    if (pontos < 0) {
      return 0;
    } else if (pontos > 100) {
      return 100;
    } else {
      return pontos;
    }
  }
}
