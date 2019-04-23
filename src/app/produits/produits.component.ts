import { Component, OnInit } from '@angular/core';
import {Produit} from "../produit.interface";
import { ProduitService } from '../produit.service';

@Component({
  selector: 'app-produits',
  templateUrl: './produits.component.html',
  styleUrls: ['./produits.component.css']
})
export class ProduitsComponent implements OnInit {
  produits : Produit[];
  constructor(private produitService : ProduitService) { }

  ngOnInit() {
  }
  onGetProduits(){
    this.produitService.getProduits()
    .subscribe(
      (produits : Produit[]) => this.produits = produits,
      (error: Response) => console.log(error)
    );
  }

}
