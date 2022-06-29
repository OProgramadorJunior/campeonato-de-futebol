import { Time } from '../time/time.entity';
export class Partida {
  private dataPartida: Date;
  private casa: Time;
  private visitante: Time;
  private golsCasa: number;
  private golsVisitante: number;

  public constructor(dataPartida: Date, casa: Time, visitante: Time) {
    this.dataPartida = dataPartida;
    this.casa = casa;
    this.visitante = visitante;
    this.golsCasa = 0;
    this.golsVisitante = 0;
  }

  public setGolsCasa() {
    this.golsCasa++;
  }

  public setGolsVisitante() {
    this.golsVisitante++;
  }

  public getDataPartida() {
    return this.dataPartida;
  }

  public getCasa() {
    return this.casa;
  }

  public getVisitante() {
    return this.visitante;
  }

  public getGolsCasa() {
    return this.golsCasa;
  }

  public getGolsVisitante() {
    return this.golsVisitante;
  }

  public Simulacao() {}
}
