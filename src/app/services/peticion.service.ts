import 'rxjs/add/operator/map';
import {Injectable} from "@angular/core";
import 'rxjs/Rx';
import {Fruit} from "../fruits-add/fruit-add.model";
import {HttpClient} from "@angular/common/http";

@Injectable()
export class PeticionService{
  // public url: string;
  public url = "http://localhost:8081/rookie/fruits";

    constructor(private _http: HttpClient){
    }

  getFruits(){
    return this._http.get<Fruit[]>(this.url);
  }

  deleteFruit(i: number){
      console.log("DELETE");
      return this._http.delete(this.url+"/"+i);
  }

  createFruit(fruit: Fruit) {
      return this._http.post(this.url, fruit)
  }

}
