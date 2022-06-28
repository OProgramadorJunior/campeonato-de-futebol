import { Jogador } from "../jogador/jogador.entity";
export class Atacante extends Jogador {
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
    this.velocidade = pVelocidade;
    this.tecnica = pTecnica;
    this.setHabilidade();
    this.setFuncao();
  }

  public setVelocidade(velocidade: number) {
    this.velocidade = this.velocidade;
  }

  public setTecnica(tecnica: number) {
    this.tecnica = this.tecnica;
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
}
