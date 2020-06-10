import { Injectable } from '@angular/core';
import { Pokemons } from '../models/pokemons.model';
import { HttpClient } from '@angular/common/http';
import { Pokemon } from '../models/pokemon.model';

@Injectable({
  providedIn: 'root'
})
export class PokemonsService {

  /* Constructeur de classe */
  constructor(private httpClient: HttpClient) { }

  /* Récuppération des 20 premiers Pokémons via PokéAPI */
  getPokemons() {
    let url = 'https://pokeapi.co/api/v2/pokemon'
    return this.httpClient.get<Pokemons>(url);
  }

  /* Récuppération des information d'un Pokémon via l'URL passée en paramètre */
  getPokemonPreview(url: string) {
    return this.httpClient.get<Pokemon>(url);
  }
}
