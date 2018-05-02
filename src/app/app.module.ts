import { BrowserModule } from '@angular/platform-browser';
import {HttpClientModule} from "@angular/common/http";

import {NgModule, OnInit, Pipe} from '@angular/core';

import { AppComponent } from './app.component';
import { FruitsAddComponent } from './fruits-add/fruits-add.component';
import { HeaderComponent } from './header/header.component';
import { FormsModule } from '@angular/forms';
import {changeColor} from "./fruits-add/fruits-add.directive";
import {PeticionService} from "./services/peticion.service";

@NgModule({
  declarations: [
    AppComponent,
    FruitsAddComponent,
    HeaderComponent,
    changeColor,

  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
  ],
  providers: [PeticionService],
  bootstrap: [AppComponent]
})
export class AppModule implements OnInit{
  ngOnInit(){

  }

}
