import { LoggedInGuard } from './logged-in.guard';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { RecipesComponent } from './components/recipes/recipes.component';
import { RecipesListComponent } from './components/recipes/recipes-list/recipes-list.component';
import { DetailComponent } from './components/recipes/detail/detail.component';
import { AggiornaComponent } from './components/recipes/aggiorna/aggiorna.component';
import { RegistrationComponent } from './components/user/registration/registration.component';
import { LoginComponent } from './components/user/login/login.component';
import { ProfileComponent } from './components/user/profile/profile.component';

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full'},
  { path: 'home', component: HomeComponent},
  { path: 'ricette', component: RecipesComponent, children: [
    { path: 'dettaglio/:title/:_id', component: DetailComponent},
    { path: 'aggiorna/:_id', component: AggiornaComponent},
    { path: '', pathMatch: 'full', component: RecipesListComponent}
  ]},
  { path: 'registrazione', component: RegistrationComponent},
  { path: 'login', component: LoginComponent },
  { path: 'profilo', component: ProfileComponent, canActivate: [LoggedInGuard]},
  { path: '**', redirectTo: 'home'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {scrollPositionRestoration: 'enabled'})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
