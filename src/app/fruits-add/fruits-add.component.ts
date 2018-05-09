import {Component, OnInit} from '@angular/core';
import {Fruit} from "./fruit-add.model";
import {PeticionService} from "../services/peticion.service";
import {Router, ActivatedRoute, Params} from "@angular/router";


@Component({
  selector: 'app-fruits-add',
  templateUrl: './fruits-add.component.html',
  styleUrls: ['./fruits-add.component.css'],
  providers: [PeticionService]
})
export class FruitsAddComponent implements OnInit {
  public fruits: Fruit [] = [
    new Fruit('Sandia', 1),
    new Fruit('Melon', 2),
    new Fruit('Kiwi', 3),
    new Fruit('Banana', 4),
    new Fruit('Manzana', 5),
  ];
  public fruit: Fruit;

  public petFruta: Fruit;
  public petFrutas: Fruit [];

  constructor(private _peticionesService: PeticionService) {

    this.fruit = new Fruit("", null);
    this.petFruta = new Fruit("" , null);
  }

   ngOnInit() {
     this.getFruits();
   }


  getFruits(): void {
    this._peticionesService.getFruits()
       .then(res => {
         this.petFrutas = res;
         console.log("array inicial "+this.petFrutas);
       });
  }


  onToggleAddUpdate(){
    this.fruits.push(this.fruit);
    this.fruit = new Fruit("",null);
  }


  onRemoveFruit(id: number){
    const pos = id;
    this.fruits.splice(pos, 1);
  }


  onRemoveFruitDB(index: number, id: number){
    console.log("borrado con id "+id);
    this._peticionesService.deleteFruit(id)
      .then( ()=> {
        this.petFrutas.splice(index, 1);
        console.table(this.petFrutas);
      });
  }


  // onCreateFruitOrUpdateDB(id: number){
  //   console.log("el nombre de la fruta es= "+ this.petFruta.name);
  //   console.log("el peso de la fruta es= "+this.petFruta.pricePerKg);
  //
  //   var index = this.petFrutas.findIndex(x => x.name == this.petFruta.name);
  //   console.log("indice " + index);
  //   console.log("con id= "+id);
  //   console.log(this.petFruta.name);
  //   console.log(this.petFruta.idFruit);
  //
  //   if(this.petFruta.name =='' || this.petFruta.pricePerKg == null){
  //     alert("no name or price");
  //   }else if (index == -1 && this.petFruta.name != ''){
  //     console.log("add");
  //     this._peticionesService.createFruit(this.petFruta)
  //       .then(fruta => {
  //         console.log(fruta);
  //         this.petFrutas.push(fruta);
  //         this.petFruta = new Fruit("",null);
  //         console.table(this.petFrutas);
  //       });
  //   }else if (index != -1 && this.petFruta.name!=''){
  //     console.log("update");
  //     this._peticionesService.updateFruit(this.petFruta, id)
  //       .then(fruta => {
  //         console.log(fruta);
  //         this.petFruta = new Fruit("",null);
  //         console.table(this.petFrutas);
  //       });
  //     this.getFruits();
  //   }
  // }

  onCreateFruitDB(){
    var index = this.petFrutas.findIndex(x => x.name == this.petFruta.name);

    if(this.petFruta.name == '' || this.petFruta.pricePerKg == null){
      alert("no name or price");
    }else if(index == -1 && this.petFruta.name!= ''){
      console.log("add");
      this._peticionesService.createFruit(this.petFruta)
        .then(fruta => {
          console.log(fruta);
          this.petFrutas.push(fruta);
          this.petFruta = new Fruit("",null);
          console.table(this.petFrutas);
        });
    }else if(index!= -1 && this.petFruta.name!= ''){
      alert("la fruta ya está introducida, si quieres actualizar su precio pulsa update!")
    }
  }

  onUpdateFruitDB(num: number, id: number){
    var index = this.petFrutas.findIndex(x => x.name == this.petFruta.name);

    if(this.petFruta.name =='' || this.petFruta.pricePerKg == null){
      alert("no name or price");
    }else if (index == -1 && this.petFruta.name != ''){
      alert("el nombre de la fruta no es correcto!");
    }else if (index != -1 && this.petFruta.name!='' && num == index){
      console.log("update");
      this._peticionesService.updateFruit(this.petFruta, id)
        .then(fruta => {
          console.log(fruta);
          this.petFruta = new Fruit("",null);
          this.getFruits();
          console.table(this.petFrutas);
        });
    }
  }


  existFruit(name: string){
    var index = this.fruits.findIndex(x => x.name == this.fruit.name);
    console.log(index);
    if (this.fruit.name == '' || this.fruit.pricePerKg == null){
      console.log("Empty field");
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

}
