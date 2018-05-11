import {Component, Input, OnInit} from '@angular/core';
import {ActivatedRoute, Params, Router} from "@angular/router";
import {Fruit} from "../fruits-list/fruits-list.model";
import {PeticionService} from "../services/peticion.service";

@Component({
  selector: 'app-fruits-edit',
  templateUrl: './fruits-edit.component.html',
  styleUrls: ['./fruits-edit.component.css']
})
export class FruitEdit implements OnInit {
  public param;
  @Input() petFruta: Fruit;
  @Input() petFrutas: Fruit[];
  newFruit : Fruit;

  constructor(private _peticionesService: PeticionService, private _route: ActivatedRoute, private _router: Router) { }

  ngOnInit() {
    this._route.params.forEach((params: Params) => {
      this.param = params['id'];
      console.log("parametros -> "+params);
    });
  }


  onCreateFruitDB() {
    var index = this.petFrutas.findIndex(x => x.name == this.petFruta.name);

    if (this.newFruit.name == '' || this.newFruit.pricePerKg == null) {
      alert("no name or price");
    } else {
      console.log("add");
      this._peticionesService.createFruit(this.petFruta)
        .then(fruta => {
          console.log(fruta);
          this.petFrutas.push(fruta);
          this.newFruit = new Fruit("", null);
          console.table(this.petFrutas);
        });
    }
  }
}
