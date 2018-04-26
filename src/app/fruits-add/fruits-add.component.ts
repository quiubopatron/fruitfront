import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { NgModel } from '@angular/forms';
import {Fruit} from "./fruit-add.model";
import {PeticionService} from "../services/peticion.service";
import { HttpModule } from '@angular/http';



@Component({
  selector: 'app-fruits-add',
  templateUrl: './fruits-add.component.html',
  styleUrls: ['./fruits-add.component.css'],
  providers: [PeticionService]
})
export class FruitsAddComponent implements OnInit {
  public fruits: Fruit [] = [
    new Fruit('Sandia', "1"),
    new Fruit('Melon', "2"),
    new Fruit('Kiwi', "3"),
    new Fruit('Banana', "4"),
    new Fruit('Manzana', "5"),
  ];
  // fName = '';
  // fPrice ;
  public fruit: Fruit;
  public petFrutas;

  constructor(private _peticionesService: PeticionService) {

    this.fruit = new Fruit("", "");
  }

  ngOnInit() {
    // console.log(this._peticionesService.getPrueba());
    console.log(this.fruits);
    console.log(this.petFrutas);
    this._peticionesService.getFrutas().subscribe(
      result => {
        this.petFrutas = result;
        console.log(result);
      },
      error => {
        var errorMessage = <any>error;
        console.log(errorMessage)
      }
    );

  }

  onToggleAddUpdate(){
    this.fruits.push(this.fruit)
    // this._peticionesService.createFruit(this.fruit)
    //   .subscribe(
    //   result => {
    //     this.petFrutas = result;
    //     console.log(result);
    //   },
    //   error => {
    //     var errorMessage = <any>error;
    //     console.log(errorMessage)
    //   }
    // );;
    this.fruit = new Fruit("","");
  }

  onRemoveFruit(id: number){
    const pos = id;
    this.fruits.splice(pos, 1);
    // this._peticionesService.deleteFruta(this.petFrutas)
  }

  onRemoveFruitDB(id: number){
    this._peticionesService.deleteFruta(id);
    this.petFrutas.splice(id, 1)
    console.log(this.petFrutas)
  }

  existFruit(name: string){
    var index = this.fruits.findIndex(x => x.name == this.fruit.name);
    console.log(index);
    if (this.fruit.name == '' || this.fruit.pricePerKg == ''){
      console.log("Empty field")
      alert("No name or price!")
    } else if (index == -1 && this.fruit.name == name){
      console.log("Added");
      this.onToggleAddUpdate();
    } else if (index != -1 && this.fruit.name!= '') {
      console.log("Updated");
      this.fruits.splice(index, 1);
      this.onToggleAddUpdate();
    }
  }

  onSubmit(){
    console.log(this.fruits);
  }
}
