import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import {Injectable} from "@angular/core";
import  {Http, Response, Headers} from '@angular/http';
import 'rxjs/Rx';
import { HttpModule } from '@angular/http';

@Injectable()
export class PeticionService{
  // public url: string;
  public url = "http://localhost:8081/rookie/fruits";
  private headers = new Headers({'Content-Type': 'application/json'});

    constructor(private _http: Http){
      this.headers.append('Access-Control-Allow-Origin', '*');
    }

  getFrutas(){
    return this._http.get(this.url).map(res => res.json());
  }

  deleteFruta(i: number){
      return this._http.delete(this.url+"/"+i);
  }

  // getPrueba(){
  //   return 'Hola mundo';
  // }
}
