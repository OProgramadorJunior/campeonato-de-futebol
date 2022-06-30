import { Time } from '../src/models/time/time.entity';

describe('testes de cadastros', () => {

  test('cadastrar vários times', () => {
    let RealMadrid = new Time('RealMadrid');
    let Barcelona = new Time('Barcelona');
    let Chapecoense = new Time('Chapecoense');
    expect(RealMadrid.getNome()).toEqual('RealMadrid');
    expect(Barcelona.getNome()).toEqual('Barcelona');
    expect(Chapecoense.getNome()).toEqual('Chapecoense');
  });

});
