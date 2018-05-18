import {Component, OnInit} from '@angular/core';
import {Fruit} from "../model/fruit";
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
  fruitSelected: Fruit;

  constructor(private _peticionesService: PeticionService,
              private _router: Router) {

  }

   ngOnInit() {
     localStorage.clear();
     this.getFruits();
   }

  getFruits(): void {
    this._peticionesService.getFruits()
       .then(res => {
         this.frutas = res;
         console.log("array inicial " + this.frutas);
       });
  }

  onRemoveFruitDB(index: number, id: number){
    console.log("borrado con id "+id);
    this._peticionesService.deleteFruit(id)
      .then( ()=> {
        this.frutas.splice(index, 1);
        console.table(this.frutas);
      });
    this._router.navigate(['/list-fruit']);
  }

  onSelect(fruit: Fruit){
    this.fruitSelected = fruit;
    this._router.navigate(['/edit-fruit'], { queryParams: { id: fruit.idFruit } });
    console.log(fruit.idFruit);
    // localStorage.setItem('fruta', JSON.stringify(this.fruitSelected));

  }
}
