import { BrowserModule } from '@angular/platform-browser';
import {HttpClientModule} from "@angular/common/http";

import {NgModule, OnInit, Pipe} from '@angular/core';

import { AppComponent } from './app.component';
import { FruitList } from './fruits-list/fruits-list.component';
import { HeaderComponent } from './header/header.component';
import { FormsModule } from '@angular/forms';
import {changeColor} from "./fruits-list/fruits-list.directive";
import {PeticionService} from "./services/peticion.service";
import { FruitEdit } from './fruits-edit/fruits-edit.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import {routing, appRoutingProviders} from "./app-routing";

@NgModule({
  declarations: [
    AppComponent,
    FruitList,
    HeaderComponent,
    changeColor,
    FruitEdit,
    PageNotFoundComponent,

  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    routing
  ],
  providers: [PeticionService,
    appRoutingProviders, Location],
  bootstrap: [AppComponent]
})
export class AppModule implements OnInit{
  loadedFeature = 'list-fruit';
  ngOnInit(){

  }

  onNavigate(feature: string){
    this.loadedFeature = feature;
  }

}
