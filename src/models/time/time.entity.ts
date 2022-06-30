import { JogadorDefensor } from './../jogadorDefesa/jogadorDefesa.entity';
import { JogadorAtacante } from './../jogadorAtacante/jogadorAtacante.entity';
import { JogadorGoleiro } from './../jogadorGoleiro/jogadorGoleiro.entity';
import { Jogador } from '../jogador/jogador.entity';
import { Partida } from '../partida/partida.entity';

const LIMITE_GOLEIRO_TIME = 1;
const LIMITE_ATACANTE_TIME = 2;
const LIMITE_DEFENSOR_TIME = 2;
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

  public setVitorias() {
    this.vitorias++;
  }

  public setDerrotas() {
    this.derrotas++;
  }

  public setEmpates() {
    this.empates++;
  }

  public getNome(): string {
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

  public getTotalDeGols(): number {
    return this.jogadores.reduce((a, b) => {
      return a + b.getGols();
    }, 0);
  }

  public getPontos(): number {
    return this.vitorias * 3 + this.empates;
  }

  private possuiCamisa(jogador: Jogador): boolean {
    return Boolean(
      this.jogadores.find(obj => obj.getCamisa() === jogador.getCamisa()),
    );
  }

  public setarJogador(jogador: Jogador): string {
    if (this.possuiCamisa(jogador)) {
      throw new Error('Já existe um jogador com essa camiseta.');
    }

    if (jogador instanceof JogadorGoleiro) {
      if (
        this.jogadores.filter(obj => obj instanceof JogadorGoleiro).length ==
        LIMITE_GOLEIRO_TIME
      ) {
        throw new Error('Já existe um goleiro.');
      }
    } else if (jogador instanceof JogadorAtacante) {
      if (
        this.jogadores.filter(obj => obj instanceof JogadorAtacante).length ==
        LIMITE_ATACANTE_TIME
      ) {
        throw new Error('Já existe dois atacantes.');
      }
    } else {
      if (
        this.jogadores.filter(obj => obj instanceof JogadorDefensor).length ==
        LIMITE_DEFENSOR_TIME
      ) {
        throw new Error('Já existe dois defensor.');
      }
    }

    this.jogadores.push(jogador);

    return 'Jogador adicionado.';
  }

  public removerJogador(jogador: Jogador): string {
    const totalJogadores = this.jogadores.length;
    this.jogadores = this.jogadores.filter(
      obj => obj.getCamisa() !== jogador.getCamisa(),
    );
    if (totalJogadores === this.jogadores.length) {
      throw new Error("Jogador não encontrado para remoção.");
    }
    return 'Jogador removido.';
  }

  public totalHabilidade(): number {
    return this.jogadores.reduce((a, b) => {
      return a + b.getHabilidade();
    }, 0);
  }
}
