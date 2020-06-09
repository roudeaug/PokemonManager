import { Pokemon } from './pokemon.model';

describe('Pokemon.Model', () => {
  it('should create an instance', () => {
    expect(new Pokemon('001', '1.png', 'Bulbizarre', 'Graine', ['Plante', 'Poison'], 0.7, 6.9)).toBeTruthy();
  });
});
