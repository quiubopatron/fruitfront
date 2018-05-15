import {Component, Input, OnInit} from '@angular/core';
import {ActivatedRoute, Params, Router} from "@angular/router";
import {Fruit} from "../fruits-list/fruits-list.model";
import {PeticionService} from "../services/peticion.service";
import {Location} from '@angular/common';

@Component({
  selector: 'app-fruits-edit',
  templateUrl: './fruits-edit.component.html',
  styleUrls: ['./fruits-edit.component.css']
})
export class FruitEdit implements OnInit {
  frutas: Fruit[];
  newFruit : Fruit;

  constructor(private _peticionesService: PeticionService, private acivatedRoute: ActivatedRoute) {
  }


  ngOnInit () {
    this._peticionesService.getFruits()
      .then(fruits => this.frutas = fruits);

    this.newFruit = new Fruit("", null);

    this.acivatedRoute.queryParams.subscribe(params => {
      let id = +params['id'];
      this._peticionesService.getFruit(id)
        .then(fruit => {
          // this.newFruit.idFruit = fruit.idFruit;
          this.newFruit.name = fruit.name;
          this.newFruit.description = fruit.description;
          this.newFruit.pricePerKg = fruit.pricePerKg;
          this.newFruit.dateCreated = fruit.dateCreated;
        });
      console.log("id -> "+id);
        });
  }

  getFruits(): void {
    this._peticionesService.getFruits()
      .then(res => {
        this.frutas = res;
        console.log("array inicial "+this.frutas);
      });
  }
  onCreateOrUpdateFruitDB() {
    var index = this.frutas.findIndex(x => x.name == this.newFruit.name);
    // var index = this.frutas.indexOf(this.newFruit);

    if (this.newFruit.name == '' || this.newFruit.pricePerKg == null) {
          alert("no name or price");
        }else if (index == -1 && this.newFruit.name != ''){
          console.log("add");
          this._peticionesService.createFruit(this.newFruit)
            .then(fruta => {
              console.log(fruta);
              // this.frutas.push(fruta);
              // this.newFruit = new Fruit("",null);
              console.table(this.frutas);
            });
        }else if (index != -1 && this.newFruit.name!=''){
          console.log("update");
          this.acivatedRoute.queryParams.subscribe(params => {
            let id = +params['id'];
            this._peticionesService.updateFruit(this.newFruit, id)
              .then(fruta => {
                console.log("id para actualizar = "+id);
                console.log(fruta);
                // this.newFruit = new Fruit("",null);
                console.table(this.frutas);
              });
          });
          this.getFruits();
    }
        }

}
// this._peticionesService.createFruit(this.newFruit)
//   .then(fruta => {
//     console.log(fruta);
//     this.frutas.push(fruta);
//     this.newFruit = new Fruit("", null);
//     console.table(this.frutas);
//   });
