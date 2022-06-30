import { JogadorGoleiro } from './../src/models/jogadorGoleiro/jogadorGoleiro.entity';
describe('TESTE JOGADORGOLEIRO', () => {

  test('teste criacao do JogadorGoleiro', () => {
    let jogador = new JogadorGoleiro(181, 89,"Bruno", "2000-06-29", 8)
    expect(jogador.getNome()).toBe('Bruno');
  });

  test('teste criacao de varios JogadorGoleiro', () => {
    let jogador = new JogadorGoleiro(181, 89,"Bruno 1", '1976-07-11', 9);
    let jogador2 = new JogadorGoleiro(101, 99,"Bruno 2", '1970-07-11', 10);
    let jogador3 = new JogadorGoleiro(81, 79,"Bruno 3", '1986-07-11', 8);
    expect(jogador.getNome()).toBe('Bruno 1');
    expect(jogador2.getNome()).toBe('Bruno 2');
    expect(jogador3.getNome()).toBe('Bruno 3');
  });

});
