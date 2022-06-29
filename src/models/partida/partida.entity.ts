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

  public showResultado() {
    console.log("Resultado do jogo -----------------" +
      "\nData: " + this.dataPartida +
      "\nCasa: " + this.casa.getNomeTime() + ": " + this.golsCasa +
      "\nVisitante: " + this.visitante.getNomeTime() + ": " + this.golsVisitante);
  }

  public Simulacao() {
    let casaPorcentagem: number = 0;
    let randomGol: number = 0;
    let rand: Random = new Random();
    randomGol = rand.nextInt(11);
    if ((this.casa.totalHabilidade() > this.visitante.totalHabilidade())) {
      casaPorcentagem = 70;
    }
    else {
      casaPorcentagem = 60;
    }

    for (let i: number = 0; (i < 3); i++) {
      if ((casaPorcentagem == 70)) {
        if ((randomGol <= 6)) {
          this.golCasa();
        }
        else if (((randomGol >= 7)
          && (randomGol <= 9))) {
          this.golVisitante();
        }

      }
      else if ((randomGol <= 5)) {
        this.golCasa();
      }
      else if (((randomGol >= 6)
        && (randomGol <= 9))) {
        this.golVisitante();
      }

    }

    if ((this.golsCasa > this.golsVisitante)) {
      this.casa.setVitorias();
      this.visitante.setDerrotas();
    }
    else if ((this.golsCasa < this.golsVisitante)) {
      this.casa.setDerrotas();
      this.visitante.setVitorias();
    }
    else {
      this.casa.setEmpates();
      this.visitante.setEmpates();
    }

    this.showResultado();
  }

  private golCasa() {
    this.setGolsCasa();
    let randomJogador: number = 0;
    let rand: Random = new Random();
    randomJogador = rand.nextInt(2);
    if ((randomJogador == 0)) {
      this.casa.atacante1Gol();
    }
    else {
      this.casa.atacante2Gol();
    }

  }

  private golVisitante() {
    this.setGolsVisitante();
    let randomJogador: number = 0;
    let rand: Random = new Random();
    randomJogador = rand.nextInt(2);
    if ((randomJogador == 0)) {
      this.visitante.atacante1Gol();
    }
    else {
      this.visitante.atacante2Gol();
    }

  }
}
