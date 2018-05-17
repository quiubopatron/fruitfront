import {Component, Inject, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";
import {Fruit} from "../model/fruit";
import {PeticionService} from "../services/peticion.service";
import {FormBuilder, FormControl, FormGroup, Validators} from "@angular/forms";

@Component({
  selector: 'app-fruits-edit',
  templateUrl: './fruits-edit.component.html',
  styleUrls: ['./fruits-edit.component.css']
})

export class FruitEdit implements OnInit {

  fruit: Fruit;
  createMode: boolean;

  constructor(private _peticionesService: PeticionService, private acivatedRoute: ActivatedRoute,
              private _router: Router) {}


  ngOnInit() {
    this.fruit = new Fruit("", null);

    if(JSON.parse(localStorage.getItem('fruta'))){
      this.fruit = JSON.parse(localStorage.getItem('fruta'));
      this.createMode = false;

    } else {
      this.createMode = true;
    }

    console.log("init ->>>>>>> " + this.fruit.name);
  }


  onCreateOrUpdateFruitDB() {
    if (this.fruit.name == '' || this.fruit.pricePerKg == null) {
      alert("no name or price");
      return;
    }

    if (this.createMode) {
      this.createFruit();

    } else {
      this.updateFruit();
    }

  }


  private updateFruit() {
    console.log("update");
    // this.acivatedRoute.queryParams.subscribe(params => {
    //   let id = +params['id'];
    this._peticionesService.updateFruit(this.fruit)
      .then(fruta => {
        console.log("id para actualizar = " + this.fruit.idFruit);
        console.log(fruta);
        this._router.navigate(['/list-fruit']);
      });
  }


  private createFruit() {
    console.log("add");
    this._peticionesService.createFruit(this.fruit)
      .then(fruta => {
        console.log(fruta);
        this._router.navigate(['/list-fruit']);
      });
  }


}
