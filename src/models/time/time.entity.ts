import { Partida } from "../partida/partida.entity";
import { Jogador } from "../jogador/jogador.entity";

export class Time {
  private nome: string;
  private jogadores: Jogador;
  private vitorias: number;
  private derrotas: number;
  private empates: number;
}
