import { JogadorAtacante } from "../src/models/jogadorAtacante/jogadorAtacante.entity";
import { JogadorDefensor } from "../src/models/jogadorDefesa/jogadorDefesa.entity";
import { JogadorGoleiro } from "../src/models/jogadorGoleiro/jogadorGoleiro.entity";
import { Time } from "../src/models/time/time.entity";

describe('TESTE PARTIDA', () => {

  test('classificar os times de acordo com suas estatisticas', () => {
    let RealMadrid = new Time('RealMadrid');
    RealMadrid.setarJogador(new JogadorAtacante(82, 90, "Romario", "2000-07-20", 10));
    RealMadrid.setarJogador(new JogadorAtacante(70, 83, "Jorge", "1997-08-02", 9));
    RealMadrid.setarJogador(new JogadorDefensor(55, 81, "Tobias", "1997-08-02", 29));
    RealMadrid.setarJogador(new JogadorDefensor(50, 84, "Rogerio", "1997-08-02", 32));
    RealMadrid.setarJogador(new JogadorGoleiro(184, 72, "Timuca", "1997-08-02", 7));
    expect(RealMadrid.totalHabilidade()).toEqual(3720);
  });


});
