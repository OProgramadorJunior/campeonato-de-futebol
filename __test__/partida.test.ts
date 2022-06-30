import { Partida } from './../src/models/partida/partida.entity';
import { JogadorAtacante } from "../src/models/jogadorAtacante/jogadorAtacante.entity";
import { JogadorDefensor } from "../src/models/jogadorDefesa/jogadorDefesa.entity";
import { JogadorGoleiro } from "../src/models/jogadorGoleiro/jogadorGoleiro.entity";
import { Time } from "../src/models/time/time.entity";

describe('TESTE PARTIDA', () => {

  test('cadastrar varias partidas', () => {

    let variasPartidas: Array<Partida> = [];

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
    time2.setarJogador(new JogadorDefensor(40, 80, "Def 1", "1980-07-11", 12));
    time2.setarJogador(new JogadorDefensor(40, 80, "Def 2", "1980-07-11", 9));

    variasPartidas.push(new Partida(new Date('2022-29-06'), time1, time2));
    variasPartidas.push(new Partida(new Date('2022-30-06'), time1, time2));

    expect(variasPartidas.length).toEqual(2);

    expect(variasPartidas[0].getGolsCasa()).toEqual(0);
    expect(variasPartidas[1].getGolsVisitante()).toEqual(0);
  });

  test('simular a execucao das partidas', () => {

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
    time2.setarJogador(new JogadorDefensor(40, 80, "Def 1", "1980-07-11", 12));
    time2.setarJogador(new JogadorDefensor(40, 80, "Def 2", "1980-07-11", 9));

    let partida = new Partida(new Date('2022-29-06'), time1, time2);

    partida.setGolsCasa();
    partida.setGolsCasa();

    expect(partida.getGolsCasa()).toEqual(2);
  });

  test('avaliar se a simulacao foi executada corretamente', () => {

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
    time2.setarJogador(new JogadorDefensor(40, 80, "Def 1", "1980-07-11", 12));
    time2.setarJogador(new JogadorDefensor(40, 80, "Def 2", "1980-07-11", 9));

    let partida = new Partida(new Date('2022-29-06'), time1, time2);

    partida.Simulacao();

    let totalPlacar = partida.getCasa().getDerrotas() + partida.getCasa().getEmpates() + partida.getCasa().getVitorias();

    expect(totalPlacar).not.toBe(0);
  });

});
