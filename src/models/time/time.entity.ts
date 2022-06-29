import { JogadorDefensor } from './../jogadorDefesa/jogadorDefesa.entity';
import { JogadorAtacante } from './../jogadorAtacante/jogadorAtacante.entity';
import { JogadorGoleiro } from './../jogadorGoleiro/jogadorGoleiro.entity';
import { Jogador } from '../jogador/jogador.entity';
import { Partida } from '../partida/partida.entity';

export class Time {
  private nome: string;

  private vitorias: number;

  private derrotas: number;

  private empates: number;

  private jogadores: Array<Jogador>;

  public constructor(nome: string) {
    this.nome = nome;
    this.vitorias = 0;
    this.derrotas = 0;
    this.empates = 0;
    this.jogadores = [];
  }

  public atacante2Gol() {
    // this.atacante2?.somaGol();
  }

  public atacante1Gol() {
    // this.atacante1?.somaGol();
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
      console.log('Ja possui um jogador com essa camisa no time!');
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

  public getJogadores(): Array<Jogador> {
    return this.jogadores;
  }

  public getNomeJogadores(): string {
    return this.jogadores.map(a => a.getNome()).join(', ');
  }

  public getPontos(): number {
    return this.vitorias * 3 + this.empates;
  }

  private getNome(pJogador: Jogador | null): string {
    if (pJogador == null) {
      return 'Ninguem';
    } else {
      return pJogador.getNome();
    }
  }

  private possuiCamisa(pJogador: Jogador): boolean {
    let possuiCamisa: boolean = false;
    // if (
    //   this.goleiro != null &&
    //   this.goleiro.getCamisa() == pJogador.getCamisa()
    // ) {
    //   possuiCamisa = true;
    // } else if (
    //   this.atacante1 != null &&
    //   this.atacante1.getCamisa() == pJogador.getCamisa()
    // ) {
    //   possuiCamisa = true;
    // } else if (
    //   this.atacante2 != null &&
    //   this.atacante2.getCamisa() == pJogador.getCamisa()
    // ) {
    //   possuiCamisa = true;
    // } else if (
    //   this.defensor1 != null &&
    //   this.defensor1.getCamisa() == pJogador.getCamisa()
    // ) {
    //   possuiCamisa = true;
    // } else if (
    //   this.defensor2 != null &&
    //   this.defensor2.getCamisa() == pJogador.getCamisa()
    // ) {
    //   possuiCamisa = true;
    // }

    return possuiCamisa;
  }

  public setarJogador(pJogador: Jogador): string {
    // 1- goleiro, 2 def, 2 atk

    if (this.jogadores.find(obj => obj.getCamisa() === pJogador.getCamisa())) {
      throw new Error('Já existe um jogador com essa camiseta.');
    }

    if (pJogador instanceof JogadorGoleiro) {
      if (this.jogadores.find(obj => obj instanceof JogadorGoleiro)) {
        throw new Error('Já existe um goleiro.');
      }
    } else if (pJogador instanceof JogadorAtacante) {
      if (
        this.jogadores.filter(obj => obj instanceof JogadorAtacante).length == 2
      ) {
        throw new Error('Já existe dois atacantes.');
      }
    } else {
      if (
        this.jogadores.filter(obj => obj instanceof JogadorDefensor).length == 2
      ) {
        throw new Error('Já existe dois defensor.');
      }
    }

    this.jogadores.push(pJogador);

    return 'Jogador adicionado.';
  }

  public totalHabilidade(): number {
    return this.jogadores.reduce((a,b) => { return a + b.getHabilidade();}, 0);
  }
}
