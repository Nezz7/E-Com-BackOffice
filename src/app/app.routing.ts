///<reference path="produits/produits.component.ts"/>
import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {FullLayoutComponent} from './full-layout/full-layout.component';
import {LoginComponent} from './login/login.component';
import {ExampleModule} from "./example/example.module";
import {ProduitsComponent} from "./produits/produits.component";
import {NewProduitComponent} from "./new-produit/new-produit.component";


export function loadExampleModule() {
  return ExampleModule;
}

export const routes: Routes = [
  {path : '' ,component : ProduitsComponent},
  {path : 'new-produit' ,component: NewProduitComponent},
  {
    path: 'login',
    component: LoginComponent
  },
  {
    path: '',
    component: FullLayoutComponent,
    children: [
      {
        path: 'example',
        loadChildren: loadExampleModule
      }
    ]
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}

