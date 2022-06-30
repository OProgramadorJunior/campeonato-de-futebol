import { Jogador } from "../src/models/jogador/jogador.entity";

describe("teste adicao do jogador", () => {
  let jogador = new Jogador('Robinho', '10-10-1996', 10);
  expect(jogador.getNome()).toBe('Robinho');
});

