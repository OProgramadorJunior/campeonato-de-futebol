import { Jogador } from '../jogador/jogador.entity';
import { Partida } from "../partida/partida.entity";

export class Time {
  private nome: string;

  private vitorias: number;

  private derrotas: number;

  private empates: number;

  private goleiro: Jogador | null;

  private atacante1: Jogador | null;

  private atacante2: Jogador | null;

  private defensor1: Jogador | null;

  private defensor2: Jogador | null;

  public constructor(nome: string) {
    this.nome = nome;
    this.vitorias = 0;
    this.derrotas = 0;
    this.empates = 0;
    this.goleiro = null;
    this.atacante1 = null;
    this.atacante2 = null;
    this.defensor1 = null;
    this.defensor2 = null;
  }

  public atacante2Gol() {
    this.atacante2.somaGol();
  }

  public atacante1Gol() {
    this.atacante1.somaGol();
  }

  public setVitorias() {
    this.vitorias++;
  }

  public setDerrotas() {
    this.derrotas++;
  }

  public setEmpates() {
    this.empates++;
  }

  public setJogador(pJogador: Jogador) {
    if (this.possuiCamisa(pJogador)) {
      console.log("Ja possui um jogador com essa camisa no time!");
    } else {
      this.setarJogador(pJogador);
    }
  }

  public getNomeTime(): string {
    return this.nome;
  }

  public getVitorias(): number {
    return this.vitorias;
  }

  public getDerrotas(): number {
    return this.derrotas;
  }

  public getEmpates(): number {
    return this.empates;
  }

  public getJogadores(): string {
    return (
      "Goleiro: " +
      (this.getNome(this.goleiro) +
        ("Atacantes: " +
          (this.getNome(this.atacante1) +
            (" e " +
              (this.getNome(this.atacante2) +
                ("Defensores: " +
                  (this.getNome(this.defensor1) +
                    (" e " + this.getNome(this.defensor2)))))))))
    );
  }

  public getPontos(): number {
    return this.vitorias * 3 + this.empates;
  }

  private getNome(pJogador: Jogador | null): string {
    if (pJogador == null) {
      return "Ninguem";
    } else {
      return pJogador.getNome();
    }
  }

  private possuiCamisa(pJogador: Jogador): boolean {
    let possuiCamisa: boolean = false;
    if (
      this.goleiro != null &&
      this.goleiro.getCamisa() == pJogador.getCamisa()
    ) {
      possuiCamisa = true;
    } else if (
      this.atacante1 != null &&
      this.atacante1.getCamisa() == pJogador.getCamisa()
    ) {
      possuiCamisa = true;
    } else if (
      this.atacante2 != null &&
      this.atacante2.getCamisa() == pJogador.getCamisa()
    ) {
      possuiCamisa = true;
    } else if (
      this.defensor1 != null &&
      this.defensor1.getCamisa() == pJogador.getCamisa()
    ) {
      possuiCamisa = true;
    } else if (
      this.defensor2 != null &&
      this.defensor2.getCamisa() == pJogador.getCamisa()
    ) {
      possuiCamisa = true;
    }

    return possuiCamisa;
  }

  private setarJogador(pJogador: Jogador) {
    if (pJogador.getFuncao() == "Goleiro" && this.goleiro == null) {
      this.goleiro = pJogador;
    } else if (pJogador.getFuncao() == "Atacante" && this.atacante1 == null) {
      this.atacante1 = pJogador;
    } else if (pJogador.getFuncao() == "Atacante" && this.atacante2 == null) {
      this.atacante2 = pJogador;
    } else if (pJogador.getFuncao() == "Defensor" && this.defensor1 == null) {
      this.defensor1 = pJogador;
    } else if (pJogador.getFuncao() == "Defensor" && this.defensor2 == null) {
      this.defensor2 = pJogador;
    } else {
      console.log("A funcao ja esta preenchida!");
    }
  }

  public totalHabilidade(): number {
    let total: number = 0;
    if (this.goleiro != null) {
      total = total + this.goleiro.getHabilidade();
    }

    if (this.atacante1 != null) {
      total = total + this.atacante1.getHabilidade();
    }

    if (this.atacante2 != null) {
      total = total + this.atacante2.getHabilidade();
    }

    if (this.defensor1 != null) {
      total = total + this.defensor1.getHabilidade();
    }

    if (this.defensor2 != null) {
      total = total + this.defensor2.getHabilidade();
    }

    return total;
  }
}
