import { BrowserModule } from '@angular/platform-browser';
import {HttpClientModule} from "@angular/common/http";

import {NgModule, OnInit, Pipe} from '@angular/core';

import { AppComponent } from './app.component';
import { FruitsAddComponent } from './fruits-add/fruits-add.component';
import { HeaderComponent } from './header/header.component';
import { FormsModule } from '@angular/forms';
import {changeColor} from "./fruits-add/fruits-add.directive";
import {PeticionService} from "./services/peticion.service";
import { FruitsUpdateComponent } from './fruits-update/fruits-update.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import {routing, appRoutingProviders} from "./app-routing";

@NgModule({
  declarations: [
    AppComponent,
    FruitsAddComponent,
    HeaderComponent,
    changeColor,
    FruitsUpdateComponent,
    PageNotFoundComponent,

  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    routing
  ],
  providers: [PeticionService,
    appRoutingProviders],
  bootstrap: [AppComponent]
})
export class AppModule implements OnInit{
  ngOnInit(){

  }

}
