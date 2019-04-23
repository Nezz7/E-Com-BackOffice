import {Injectable} from "@angular/core";
import {Http,Response} from "@angular/http";
import 'rxjs/RX';
import { Observable } from "rxjs/RX";
import { headersToString } from "selenium-webdriver/http";
@Injectable()
export class ProduitService {
  constructor (private http : Http){

  }
  getProduits(): Observable<any>{
    return this.http.get('http://127.0.0.1:8000/api/produits')
      .map(
      (response: Response) => {
           return response.json().produits;
        }
    );
  }
  /*
  updateProduit(id: number, newlabel: string, newprix: number, newquantite: number){
    const body = JSON.stringify({
      "label": newlabel,
      "prix": newprix,
      "quantite": newquantite
    });
    const headers = new Headers({'Content-Type':'application/json'});
    return this.http.put("http://127.0.0.1:8000/api/produit/"+id,body,{headers :headers})
  }*/
}
