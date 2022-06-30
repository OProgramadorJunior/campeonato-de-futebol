import { Time } from '../src/models/time/time.entity';
import { JogadorAtacante } from "../src/models/jogadorAtacante/jogadorAtacante.entity";
import { JogadorDefensor } from "../src/models/jogadorDefesa/jogadorDefesa.entity";
import { JogadorGoleiro } from "../src/models/jogadorGoleiro/jogadorGoleiro.entity";

describe('TESTE TIME', () => {

  test('cadastrar vários times', () => {
    let RealMadrid = new Time('RealMadrid');
    let Barcelona = new Time('Barcelona');
    let Chapecoense = new Time('Chapecoense');
    expect(RealMadrid.getNome()).toEqual('RealMadrid');
    expect(Barcelona.getNome()).toEqual('Barcelona');
    expect(Chapecoense.getNome()).toEqual('Chapecoense');
  });

  test('adicionar jogadores em um time', () => {
    let RealMadrid = new Time('RealMadrid');
    RealMadrid.setarJogador(new JogadorAtacante(82, 90, "Romario", "2000-07-20", 10));
    RealMadrid.setarJogador(new JogadorAtacante(70, 83, "Jorge", "1997-08-02", 9));
    RealMadrid.setarJogador(new JogadorDefensor(55, 81, "Tobias", "1997-08-02", 29));
    RealMadrid.setarJogador(new JogadorDefensor(50, 84, "Rogerio", "1997-08-02", 32));
    RealMadrid.setarJogador(new JogadorGoleiro(184, 72, "Timuca", "1997-08-02", 7));
    expect(RealMadrid.getJogadores().length).toEqual(5);
  });

  test('remover jogadores de um time', () => {
    let RealMadrid = new Time('RealMadrid');
    RealMadrid.setarJogador(new JogadorAtacante(82, 90, "Romario", "2000-07-20", 10));
    RealMadrid.setarJogador(new JogadorAtacante(70, 83, "Jorge", "1997-08-02", 9));
    RealMadrid.setarJogador(new JogadorDefensor(55, 81, "Tobias", "1997-08-02", 29));
    RealMadrid.setarJogador(new JogadorDefensor(50, 84, "Rogerio", "1997-08-02", 32));
    RealMadrid.setarJogador(new JogadorGoleiro(184, 72, "Timuca", "1997-08-02", 7));
    RealMadrid.removerJogador(RealMadrid.getJogadores()[0]);
    RealMadrid.removerJogador(RealMadrid.getJogadores()[0]);
    expect(RealMadrid.getJogadores().length).toEqual(3);
  });

  test('classificar os times de acordo com a habilidade total de seus jogadores', () => {
    let RealMadrid = new Time('RealMadrid');
    RealMadrid.setarJogador(new JogadorAtacante(82, 90, "Romario", "2000-07-20", 10));
    RealMadrid.setarJogador(new JogadorAtacante(70, 83, "Jorge", "1997-08-02", 9));
    RealMadrid.setarJogador(new JogadorDefensor(55, 81, "Tobias", "1997-08-02", 29));
    RealMadrid.setarJogador(new JogadorDefensor(50, 84, "Rogerio", "1997-08-02", 32));
    RealMadrid.setarJogador(new JogadorGoleiro(184, 72, "Timuca", "1997-08-02", 7));
    expect(RealMadrid.totalHabilidade()).toEqual(3720);
  });

});
