import { Jogador } from "../jogador/jogador.entity";
export class JogadorDefensor extends Jogador {
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
    this.cobertura = this.Pontos(pCobertura);
    this.desarme = this.Pontos(pDesarme);
    this.setHabilidade();
    this.setFuncao();
  }

  public setCobertura(pCobertura: number) {
    this.cobertura = this.Pontos(pCobertura);
  }

  public setDesarme(pDesarme: number) {
    this.desarme = this.Pontos(pDesarme);
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
