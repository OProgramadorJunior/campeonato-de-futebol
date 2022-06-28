import { Jogador } from "../jogador/jogador.entity";
export class Defensor extends Jogador {
  private cobertura: number;

  private desarme: number;

  public constructor(
    pCobertura: number,
    pDesarme: number,
    pNome: string,
    pData: string,
    pCamisa: number
  ){
    super(pNome, pData, pCamisa);
    this.cobertura = pCobertura;
    this.desarme = pDesarme;
    this.setHabilidade();
    this.setFuncao();
  }

  public setCobertura(pCobertura: number) {
    this.cobertura = pCobertura;
  }

  public setDesarme(pDesarme: number) {
    this.desarme = pDesarme;
  }

  public setHabilidade() {
    this.habilidade = this.cobertura * 6 + this.desarme * 4;
  }

  public setFuncao() {
    this.funcao = "Defensor";
  }

  public getCobertura(): number {
    return this.cobertura;
  }

  public getDesarme(): number {
    return this.desarme;
  }
}
