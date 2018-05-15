import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {Fruit} from "./fruits-list.model";
import {PeticionService} from "../services/peticion.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-fruits-list',
  templateUrl: './fruits-list.component.html',
  styleUrls: ['./fruits-list.component.css'],
  providers: [PeticionService]
})
export class FruitList implements OnInit {
  public frutas: Fruit [];
  @Output() fruitSelected: Fruit;

  constructor(private _peticionesService: PeticionService,
              private _router: Router) {
  }

   ngOnInit() {
     this.getFruits();
   }

  getFruits(): void {
    this._peticionesService.getFruits()
       .then(res => {
         this.frutas = res;
         console.log("array inicial "+this.frutas);
       });
  }

  onRemoveFruitDB(index: number, id: number){
    console.log("borrado con id "+id);
    this._peticionesService.deleteFruit(id)
      .then( ()=> {
        this.frutas.splice(index, 1);
        console.table(this.frutas);
      });
  }

  onSelect(fruit: Fruit){
    this.fruitSelected = fruit;
    this._router.navigate(['/edit-fruit'], { queryParams: { id: fruit.idFruit } });
    console.log(fruit.idFruit);

  }
}
