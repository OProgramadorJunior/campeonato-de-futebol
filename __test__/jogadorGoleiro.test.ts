import { JogadorGoleiro } from './../src/models/jogadorGoleiro/jogadorGoleiro.entity';
describe('TESTE JOGADORGOLEIRO', () => {

  test('teste criacao do JogadorGoleiro', () => {
    let jogador = new JogadorGoleiro(181, 89,"Bruno", "2000-06-29", 8)
    expect(jogador.getNome()).toBe('Bruno');
  });

});
