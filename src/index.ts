import { JogadorDefensor } from './models/jogadorDefesa/jogadorDefesa.entity';
import { Partida } from './models/partida/partida.entity';
import { JogadorAtacante } from "./models/jogadorAtacante/jogadorAtacante.entity";
import { JogadorGoleiro } from "./models/jogadorGoleiro/jogadorGoleiro.entity";
import { Time } from "./models/time/time.entity";

async function main() {

    try {

        let jogos = [];


        let time1 = new Time("Azul");
        time1.setarJogador(new JogadorGoleiro(181, 89,"Bruno", "2000-06-29", 8));
        time1.setarJogador(new JogadorAtacante(40, 80, "Romario", "1976-07-11", 10));
        time1.setarJogador(new JogadorAtacante(40, 80, "Robinho", "1980-07-11", 11));
        time1.setarJogador(new JogadorDefensor(40, 80, "Def 1", "1980-07-11", 12));
        time1.setarJogador(new JogadorDefensor(40, 80, "Def 2", "1980-07-11", 9));

        let time2 = new Time("Maracuja");
        time2.setarJogador(new JogadorGoleiro(181, 89,"Bruno", "2000-06-29", 8));
        time2.setarJogador(new JogadorAtacante(40, 80, "Romario", "1976-07-11", 10));
        time2.setarJogador(new JogadorAtacante(40, 80, "Robinho", "1980-07-11", 11));
        time1.setarJogador(new JogadorDefensor(40, 80, "Def 1", "1980-07-11", 12));
        time1.setarJogador(new JogadorDefensor(40, 80, "Def 2", "1980-07-11", 9));
    
        jogos.push(new Partida(new Date('2022-29-06'), time1, time2));

     
    } catch (error) {
        console.error(error);
    }
    
}

main();