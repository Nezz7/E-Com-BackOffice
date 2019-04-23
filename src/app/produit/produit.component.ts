import { Component, OnInit, Input } from '@angular/core';
import {Produit} from "../produit.interface";

@Component({
  selector: 'app-produit',
  templateUrl: './produit.component.html',
  styleUrls: ['./produit.component.css']
})
export class ProduitComponent implements OnInit {
  @Input() produit : Produit;
  constructor() { }

  ngOnInit() {
  }

}
