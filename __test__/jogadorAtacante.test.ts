import { JogadorAtacante } from './../src/models/jogadorAtacante/jogadorAtacante.entity';

describe('TESTE JOGADORATACANTE', () => {
  test('teste criacao do JogadorAtacante', () => {
    let jogador = new JogadorAtacante(40, 80, 'Romario', '1976-07-11', 10);
    expect(jogador.getNome()).toBe('Romario');
  });
});
