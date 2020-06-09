import { Injectable } from '@angular/core';
import { Pokemon } from '../models/pokemon.model';

@Injectable({
  providedIn: 'root'
})
export class PokemonsService {

  /* Création de la liste de Pokémons */
  pokemons : Array<Object> = [
    new Pokemon('001', '1.png', 'bulbizarre', 'Graine', ['Plante', 'Poison'], 0.7, 6.9),
    new Pokemon('002', '2.png', 'herbizarre', 'Graine', ['Plante', 'Poison'], 1, 13),
    new Pokemon('003', '3.png', 'florizarre', 'Graine', ['Plante', 'Poison'], 2, 100),
    new Pokemon('004', '4.png', 'salamèche', 'Lézard', ['Feu'], 0.6, 8.5),
    new Pokemon('005', '5.png', 'reptincèle', 'Flamme', ['Feu'], 1.1, 19),
    new Pokemon('006', '6.png', 'dracaufeu', 'Flamme', ['Feu', 'Vol'], 1.7, 90.5),
  ];

  /* Constructeur de classe */
  constructor() { }

  /* Accesseur de la liste de Pokémons */
  getPokemons() {
    return this.pokemons;
  }

  /* Accesseur du nombre de Pokémons */
  getPokemonsCount() {
    return this.pokemons.length;
  }
}
