import { JogadorDefensor } from './models/jogadorDefesa/jogadorDefesa.entity';
import { Partida } from './models/partida/partida.entity';
import { JogadorAtacante } from "./models/jogadorAtacante/jogadorAtacante.entity";
import { JogadorGoleiro } from "./models/jogadorGoleiro/jogadorGoleiro.entity";
import { Time } from "./models/time/time.entity";

async function main() {

    try {

        let RealMadrid = new Time('RealMadrid');
        RealMadrid.setarJogador(new JogadorAtacante(82, 90, "Romario", "2000-07-20", 10));
        RealMadrid.setarJogador(new JogadorAtacante(70, 83, "Jorge", "1997-08-02", 9));
        RealMadrid.setarJogador(new JogadorDefensor(55, 81, "Tobias", "1997-08-02", 29));
        RealMadrid.setarJogador(new JogadorDefensor(50, 84, "Rogerio", "1997-08-02", 32));
        RealMadrid.setarJogador(new JogadorGoleiro(184, 72, "Timuca", "1997-08-02", 7));
    
        console.log(RealMadrid.totalHabilidade());

        // let jogos = [];


        // let time1 = new Time("Azul");
        // time1.setarJogador(new JogadorGoleiro(181, 89,"Bruno", "2000-06-29", 8));
        // time1.setarJogador(new JogadorAtacante(40, 80, "Romario", "1976-07-11", 10));
        // time1.setarJogador(new JogadorAtacante(40, 80, "Robinho", "1980-07-11", 11));
        // time1.setarJogador(new JogadorDefensor(40, 80, "Def 1", "1980-07-11", 12));
        // time1.setarJogador(new JogadorDefensor(40, 80, "Def 2", "1980-07-11", 9));

        // let time2 = new Time("Maracuja");
        // time2.setarJogador(new JogadorGoleiro(181, 89,"Bruno", "2000-06-29", 8));
        // time2.setarJogador(new JogadorAtacante(40, 80, "Romario", "1976-07-11", 10));
        // time2.setarJogador(new JogadorAtacante(40, 80, "Robinho", "1980-07-11", 11));
        // time2.setarJogador(new JogadorDefensor(40, 80, "Def 1", "1980-07-11", 12));
        // time2.setarJogador(new JogadorDefensor(40, 80, "Def 2", "1980-07-11", 9));
    
        // jogos.push(new Partida(new Date('2022-29-06'), time1, time2));
        // jogos.push(new Partida(new Date('2022-29-07'), time1, time2));

        // for (const partida of jogos) {
        //     partida.Simulacao();
        // }

    } catch (error) {
        console.error(error);
    }
    
}

main();