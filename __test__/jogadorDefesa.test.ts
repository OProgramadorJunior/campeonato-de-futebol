import { JogadorDefensor } from './../src/models/jogadorDefesa/jogadorDefesa.entity';

describe('TESTE JOGADORDEFENSOR', () => {
  test('teste criacao do JogadorDefensor', () => {
    let jogador = new JogadorDefensor(40, 80, 'Def 1', '1980-07-11', 12);
    expect(jogador.getNome()).toBe('Def 1');
  });
});
