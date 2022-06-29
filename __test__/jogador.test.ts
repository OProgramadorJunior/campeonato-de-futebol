import { Jogador } from "../src/models/jogador/jogador.entity";
import { JogadorAtacante } from "../src/models/jogadorAtacante/jogadorAtacante.entity";
import { JogadorDefensor } from "../src/models/jogadorDefesa/jogadorDefesa.entity";
import { JogadorGoleiro } from "../src/models/jogadorGoleiro/jogadorGoleiro.entity";
import { Partida } from "../src/models/partida/partida.entity";

describe("adds 1 + 2 to equal 3", () => {
  let jogador = new Jogador('Robinho', '10-10-1996', 10);
  expect(jogador.getNome()).toBe('Robinho');
});

var aReal1 = new JogadorAtacante(82, 90, "Romario", "2000-07-20", 10);
let aReal2 = new JogadorAtacante(70, 83, "Jorge", "1997-08-02", 9);
let dReal1 = new JogadorDefensor(55, 81, "Tobias", "1997-08-02", 29);
let dReal2 = new JogadorDefensor(50, 84, "Rogerio", "1997-08-02", 32);
let gReal = new JogadorGoleiro(184, 72, "Timuca", "1997-08-02", 7);

let aBarc1 = new JogadorAtacante(40, 80, "Antonio", "1990-07-21", 11);
let aBarc2 = new JogadorAtacante(40, 80, "Luigi", "1993-09-19", 9);
let dBarc1 = new JogadorDefensor(40, 80, "Jair", "1993-09-19", 8);
let dBarc2 = new JogadorDefensor(40, 80, "Luis", "1993-09-19", 45);
let gBarc = new JogadorGoleiro(185, 76, "Roger", "1993-09-19", 1);

let aChap1 = new JogadorAtacante(82, 93, "Igor", "2003-11-12", 11);
let aChap2 = new JogadorAtacante(59, 87, "Getulio", "2002-02-27", 9);
let dChap1 = new JogadorDefensor(69, 79, "Osvaldo", "2000--04-11", 5);
let dChap2 = new JogadorDefensor(77, 85, "Renato", "1997--07-21", 2);
let gChap = new JogadorGoleiro(196, 80, "Thiago", "1999-09-04", 1);

