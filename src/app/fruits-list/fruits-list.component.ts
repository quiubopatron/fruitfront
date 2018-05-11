import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {Fruit} from "./fruits-list.model";
import {PeticionService} from "../services/peticion.service";
import {Router, ActivatedRoute, Params} from "@angular/router";


@Component({
  selector: 'app-fruits-list',
  templateUrl: './fruits-list.component.html',
  styleUrls: ['./fruits-list.component.css'],
  providers: [PeticionService]
})
export class FruitList implements OnInit {
  public petFrutas: Fruit [];
  @Output() fruitSelected = new EventEmitter<void>();

  constructor(private _peticionesService: PeticionService) {
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



  // onUpdateFruitDB(num: number, id: number){
  //   var index = this.petFrutas.findIndex(x => x.name == this.petFruta.name);
  //
  //   if(this.petFruta.name =='' || this.petFruta.pricePerKg == null){
  //     alert("no name or price");
  //   }else if (index == -1 && this.petFruta.name != ''){
  //     alert("el nombre de la fruta no es correcto!");
  //   }else if (index != -1 && this.petFruta.name!='' && num == index){
  //     console.log("update");
  //     this._peticionesService.updateFruit(this.petFruta, id)
  //       .then(fruta => {
  //         console.log(fruta);
  //         this.petFruta = new Fruit("",null);
  //         this.getFruits();
  //         console.table(this.petFrutas);
  //       });
  //   }
  // }

  onSelected(){
    this.fruitSelected.emit();
  }


}
