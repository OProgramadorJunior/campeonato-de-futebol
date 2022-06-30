import { JogadorAtacante } from './../src/models/jogadorAtacante/jogadorAtacante.entity';

describe('TESTE JOGADORATACANTE', () => {

  test('teste criacao do JogadorAtacante', () => {
    let jogador = new JogadorAtacante(40, 80, 'Romario', '1976-07-11', 10);
    expect(jogador.getNome()).toBe('Romario');
  });

  test('teste criacao de varios JogadorAtacante', () => {
    let jogador = new JogadorAtacante(40, 80, 'Romario', '1976-07-11', 9);
    let jogador2 = new JogadorAtacante(45, 90, 'Romario 2', '1970-07-11', 10);
    let jogador3 = new JogadorAtacante(50, 85, 'Romario 3', '1986-07-11', 8);
    expect(jogador.getNome()).toBe('Romario');
    expect(jogador2.getNome()).toBe('Romario 2');
    expect(jogador3.getNome()).toBe('Romario 3');
  });

});
