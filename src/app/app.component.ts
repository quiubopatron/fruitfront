import { Component } from '@angular/core';
import { HttpModule, JsonpModule } from '@angular/http';
import {PeticionService} from "./services/peticion.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  title = 'RookieProject';

  constructor(private peticionService: PeticionService){

  }

}


