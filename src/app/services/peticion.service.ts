import 'rxjs/add/operator/map';
import {Injectable} from "@angular/core";
import 'rxjs/Rx';
import {Fruit} from "../model/fruit";
import {HttpClient, HttpHeaders} from "@angular/common/http";

@Injectable()
export class PeticionService {
  public url = "http://localhost:8081/rookie/fruits";
  private headers = new HttpHeaders({'Content-Type': 'application/json'});


  constructor(private _http: HttpClient) {
  }

  getFruits(): Promise<Fruit[]> {
    return this._http.get(this.url)
      .toPromise()
      .then(response => response as Fruit[])
      .catch(this.handleError);
  }

  getFruit(id: number): Promise<Fruit>{
    return this._http.get(this.url + "/" + id)
      .toPromise()
      .then(response => response as Fruit)
      .catch(this.handleError);
  }

  deleteFruit(id: number): Promise<void> {
    console.log("DELETE");
    return this._http.delete(this.url + "/" + id)
      .toPromise()
      .then(() => null)
      .catch(this.handleError);
  }

  createFruit(fruit: Fruit): Promise<Fruit>{
    console.log("CREATE");
    return this._http.post(this.url, JSON.stringify(fruit), {headers: this.headers})
      .toPromise()
      .then(response => response as Fruit)
      .catch(this.handleError);
  }

  updateFruit(fruit: Fruit): Promise<Fruit>{
    console.log("UPDATE");
    return this._http.put(this.url + "/" + fruit.idFruit , JSON.stringify(fruit), {headers: this.headers})
      .toPromise()
      .then(() => fruit)
      .catch(this.handleError);
  }

  refresh() : void {
    window.location.reload();
  }

  private handleError(error: any): Promise<any> {
    console.error('An error occurred', error);
    return Promise.reject(error.message || error);
  }
}
