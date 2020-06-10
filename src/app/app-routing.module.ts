import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { GenerationsComponent } from './components/generations/generations.component';
import { PokemonsComponent } from './components/pokemons/pokemons.component';
import { SignInComponent } from './components/sign-in/sign-in.component';
import { SignUpComponent } from './components/sign-up/sign-up.component';


const routes: Routes = [
  { path: 'generations', component: GenerationsComponent },
  { path: 'pokemons', component: PokemonsComponent },
  { path: 'connexion', component: SignInComponent },
  { path: 'inscription', component: SignUpComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
