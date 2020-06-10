import { Component, OnInit } from '@angular/core';
import { PokemonsService } from 'src/app/services/pokemons.service';
import { SearchForm } from 'src/app/models/search-form.model';
import { Pokemon } from 'src/app/models/pokemon.model';

@Component({
  selector: 'app-pokemons',
  templateUrl: './pokemons.component.html',
  styleUrls: ['./pokemons.component.css']
})
export class PokemonsComponent implements OnInit {

  /* Attributs de classe */
  pokemons: Array<Pokemon> = [];
  count: number;
  searchForm = new SearchForm('');

  /* Constructeur de classe et création de l'instance du service PokemonsService */
  constructor(private pokemonsService: PokemonsService) { }

  ngOnInit(): void {
    this.getPokemons();
  }

  /* Appel du service PokemonsService pour réccupérer la liste des Pokémons */
  getPokemons() {
    /* Appel au service de réccupération des 20 premiers Pokémons */
    this.pokemonsService
      .getPokemons()
      .subscribe(
        (res1) => {
          /* Parcours des Pokémons reçus par l'API */
          res1.results.forEach(pokemon => {
            /* Appel au service de réccupération d'information d'un Pokémon */
            this.pokemonsService
            .getPokemonPreview(pokemon.url)
            .subscribe(
              (res2) => {
                  /* Ajout du Pokémon à liste de classe pour affichage */
                  this.pokemons.push(res2);
              },
              (error) => { 
                console.log("Erreur lors du chargement des données d'un Pokémon de l'API : " + error);
              }
            )
          });
        },
        (error) => { console.log("Erreur lors du chargement des données des Pokémons de l'API : " + error);
      });
  }

}
