import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {AppComponent} from './app.component';
import {FullLayoutComponent} from './full-layout/full-layout.component';
import {LoginComponent} from './login/login.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {CommonModule, HashLocationStrategy, LocationStrategy} from '@angular/common';
import {FormsModule} from '@angular/forms';
import {AppRoutingModule} from './app.routing';
import {StorageService} from './shared/services/storage.service';
import {HttpClientModule} from '@angular/common/http';
import {SharedModule} from "./shared/shared.module";
import {ExampleModule} from "./example/example.module";
import {AdminService} from "./shared/services/admin.service";
import { NewProduitComponent } from './new-produit/new-produit.component';
import { ProduitComponent } from './produit/produit.component';
import { ProduitsComponent } from './produits/produits.component';
import { ProduitService } from './produit.service';
import { Http, HttpModule } from '@angular/http';

@NgModule({
  declarations: [
    AppComponent,
    FullLayoutComponent,
    LoginComponent,
    NewProduitComponent,
    ProduitComponent,
    ProduitsComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    CommonModule,
    FormsModule,
    AppRoutingModule,
    HttpClientModule,
    SharedModule,
    ExampleModule,
    HttpModule
  ],
  providers: [
    {
      provide: LocationStrategy,
      useClass: HashLocationStrategy
    },
    StorageService,
    AdminService,
    ProduitService
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
