import { Component, OnInit } from '@angular/core';
import { PokemonsService } from 'src/app/services/pokemons.service';
import { SearchForm } from 'src/app/models/search-form.model';

@Component({
  selector: 'app-pokemons',
  templateUrl: './pokemons.component.html',
  styleUrls: ['./pokemons.component.css']
})
export class PokemonsComponent implements OnInit {

  /* Attributs de classe */
  pokemons: Array<Object>;
  count: number;
  searchForm = new SearchForm('');

  /* Constructeur de classe et création de l'instance du service PokemonsService */
  constructor(private pokemonsService: PokemonsService) { }

  ngOnInit(): void {
    this.getPokemons();
    this.getPokemonsCount();
  }

  /* Appel du service PokemonsService pour réccupérer la liste des Pokémons */
  getPokemons() {
    this.pokemons = this.pokemonsService.getPokemons();
  }

  /* Appel du service PokemonsService pour réccupérer le nombre de Pokémons */
  getPokemonsCount() {
    this.count = this.pokemonsService.getPokemonsCount();
  }

}
