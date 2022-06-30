import { JogadorDefensor } from './../src/models/jogadorDefesa/jogadorDefesa.entity';

describe('TESTE JOGADORDEFENSOR', () => {

  test('teste criacao do JogadorDefensor', () => {
    let jogador = new JogadorDefensor(40, 80, 'Def 1', '1980-07-11', 12);
    expect(jogador.getNome()).toBe('Def 1');
  });

  test('teste criacao de varios JogadorDefensor', () => {
    let jogador = new JogadorDefensor(40, 80, 'Def 1', '1976-07-11', 9);
    let jogador2 = new JogadorDefensor(40, 80, 'Def 2', '1970-07-11', 10);
    let jogador3 = new JogadorDefensor(40, 80, 'Def 3', '1986-07-11', 8);
    expect(jogador.getNome()).toBe('Def 1');
    expect(jogador2.getNome()).toBe('Def 2');
    expect(jogador3.getNome()).toBe('Def 3');
  });

});
