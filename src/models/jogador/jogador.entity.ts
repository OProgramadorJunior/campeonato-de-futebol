import { Time } from "../time/time.entity";
export class Jogador extends Time {
    id: number;
    private nome: string;
    protected idade: string;
    protected habilidade: number;
    private gols: number;
    private camisa: number;
}