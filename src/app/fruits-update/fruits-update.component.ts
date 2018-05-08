import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Params, Router} from "@angular/router";
import {Fruit} from "../fruits-add/fruit-add.model";
import {PeticionService} from "../services/peticion.service";

@Component({
  selector: 'app-fruits-update',
  templateUrl: './fruits-update.component.html',
  styleUrls: ['./fruits-update.component.css']
})
export class FruitsUpdateComponent implements OnInit {
  public param;
  public fruitToUpdate: Fruit;

  constructor(private _peticionesService: PeticionService, private _route: ActivatedRoute, private _router: Router) { }

  ngOnInit() {
    this._route.params.forEach((params: Params) => {
      this.param = params['id'];
      console.log("parametros -> "+params);
    });
    console.log(this.param);
  }


  // onUpdateFruit(){
  //   this.fruitToUpdate.idFruit = this.param;
  //   console.log("el nombre ctualziado de la fruta es= "+ this.fruitToUpdate.name);
  //   console.log("el peso actualizado de la fruta es= "+ this.fruitToUpdate.pricePerKg);
  //   this._peticionesService.updateFruit(this.fruitToUpdate)
  //     .then(fruta => {
  //       console.log(fruta);
  //       this.fruitToUpdate = new Fruit("",null);
  //       console.table(this.fruitToUpdate);
  //     });
  // }
}
