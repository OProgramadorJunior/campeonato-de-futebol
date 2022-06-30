import { Jogador } from "../src/models/jogador/jogador.entity";

describe("TESTE JOGADOR", () => {

  test('teste criacao do Jogador', () => {
    let jogador = new Jogador('Robinho', '10-10-1996', 10);
    expect(jogador.getNome()).toBe('Robinho');
  });

  test('teste criacao de varios Jogador', () => {
    let jogador = new Jogador('Robinho', '10-10-1996', 10);
    let jogador2 = new Jogador('Robinho 1', '10-10-1990', 9);
    let jogador3 = new Jogador('Robinho 2', '10-10-1991', 8);
    expect(jogador.getNome()).toBe('Robinho');
    expect(jogador2.getNome()).toBe('Robinho 1');
    expect(jogador3.getNome()).toBe('Robinho 2');
  });

});

