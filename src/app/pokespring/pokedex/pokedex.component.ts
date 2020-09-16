import { Component, OnInit } from '@angular/core';
import {PokemonService} from "../../core/http/pokemon.service";
import {Pokemon} from "../../shared/models/pokemon";
import {Router} from "@angular/router";

@Component({
  selector: 'app-pokedex',
  templateUrl: './pokedex.component.html',
  styleUrls: ['./pokedex.component.less'],
})
export class PokedexComponent implements OnInit {

  pokemons: Pokemon[];
  constructor(private pokemonService: PokemonService,
              private router: Router) { }

  ngOnInit(): void {
    this.pokemonService.getAllPokemons().subscribe(pokemons => {
      this.pokemons = pokemons;
    });
  }

}
