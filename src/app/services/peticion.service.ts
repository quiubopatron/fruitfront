import 'rxjs/add/operator/map';
import {Injectable} from "@angular/core";
import 'rxjs/Rx';
import {Fruit} from "../fruits-add/fruit-add.model";
import {HttpClient} from "@angular/common/http";

@Injectable()
export class PeticionService {
  // public url: string;
  public url = "http://localhost:8081/rookie/fruits";
  private headers = new Headers({'Content-Type': 'application/json'});

  constructor(private _http: HttpClient) {
  }

  getFruits(): Promise<Fruit[]> {
    return this._http.get(this.url)
      .toPromise()
      .then(response => response as Fruit[])
      .catch(this.handleError);
  }

  deleteFruit(i: number) {
    console.log("DELETE");
    return this._http.delete(this.url + "/" + i);
  }

  createFruit(fruit: Fruit) {
    return this._http.post(this.url, fruit)
  }

  private handleError(error: any): Promise<any> {
    console.error('An error occurred', error); // for demo purposes only
    return Promise.reject(error.message || error);
  }
}
