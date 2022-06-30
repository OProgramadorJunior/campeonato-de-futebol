import { Jogador } from "../src/models/jogador/jogador.entity";

describe("TESTE JOGADOR", () => {

  test('teste adicao do jogador', () => {
    let jogador = new Jogador('Robinho', '10-10-1996', 10);
    expect(jogador.getNome()).toBe('Robinho');
  });

});

