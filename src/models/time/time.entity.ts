import { Partida } from "../partida/partida.entity";
import { Jogador } from "../jogador/jogador.entity";

export class Time extends Partida { 
    private nome: string;
    private jogadores: Jogador;
    private vitorias: number;
    private derrotas: number;
    private empates: number;
};