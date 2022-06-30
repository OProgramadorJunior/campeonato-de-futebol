import { Time } from '../src/models/time/time.entity';
import { JogadorAtacante } from "../src/models/jogadorAtacante/jogadorAtacante.entity";
import { JogadorDefensor } from "../src/models/jogadorDefesa/jogadorDefesa.entity";
import { JogadorGoleiro } from "../src/models/jogadorGoleiro/jogadorGoleiro.entity";

describe('testes de cadastros', () => {

  test('cadastrar vários times', () => {
    let RealMadrid = new Time('RealMadrid');
    let Barcelona = new Time('Barcelona');
    let Chapecoense = new Time('Chapecoense');
    expect(RealMadrid.getNome()).toEqual('RealMadrid');
    expect(Barcelona.getNome()).toEqual('Barcelona');
    expect(Chapecoense.getNome()).toEqual('Chapecoense');
  });

  let RealMadrid = new Time('RealMadrid');
  let aReal1 = new JogadorAtacante(82, 90, "Romario", "2000-07-20", 10);
  let aReal2 = new JogadorAtacante(70, 83, "Jorge", "1997-08-02", 9);
  let dReal1 = new JogadorDefensor(55, 81, "Tobias", "1997-08-02", 29);
  let dReal2 = new JogadorDefensor(50, 84, "Rogerio", "1997-08-02", 32);
  let gReal = new JogadorGoleiro(184, 72, "Timuca", "1997-08-02", 7);
  
  test('cadastrar vários times', () => {
    RealMadrid.setarJogador(aReal1);
    RealMadrid.setarJogador(aReal2);
    RealMadrid.setarJogador(dReal1);
    RealMadrid.setarJogador(dReal2);
    RealMadrid.setarJogador(gReal);

    let jogador1 = RealMadrid.getJogadores(); 


    expect(jogador1[0]).toEqual(aReal1);
    expect(jogador1[1]).toEqual(aReal2);
    expect(jogador1[2]).toEqual(dReal1);
    expect(jogador1[3]).toEqual(dReal2);
    expect(jogador1[4]).toEqual(gReal);

  });

  test('cadastrar vários times', () => {
    RealMadrid.removerJogador(aReal1);
    RealMadrid.removerJogador(aReal2);
    RealMadrid.removerJogador(dReal1);
    RealMadrid.removerJogador(dReal2);
    RealMadrid.removerJogador(gReal);

    expect(RealMadrid.getTimeCompleto()).toEqual(false);

  });


});
