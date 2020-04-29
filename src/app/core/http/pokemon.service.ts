import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Pokemon} from "../../shared/models/pokemon";
import {environment} from "../../../environments/environment";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class PokemonService {

  constructor(private httpClient: HttpClient) { }

  public getAllPokemons(): Observable<Pokemon[]> {
    const allPokemonsUrl = '/pokemons/';
    return this.httpClient.get<Pokemon[]>(environment.apiUrl.concat(allPokemonsUrl));
  }
}
