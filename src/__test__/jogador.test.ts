import { Jogador } from "../models/jogador/jogador.entity";

describe("adds 1 + 2 to equal 3", () => {
  let jogador = new Jogador('Robinho', '10-10-1996', 10);
  expect(jogador.getNome()).toBe('Robinho');
});
