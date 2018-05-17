import {Component, OnInit} from '@angular/core';
import {PeticionService} from "../services/peticion.service";

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor(private _peticionesService: PeticionService) { }

  ngOnInit() {

  }

  onSelect () {
    localStorage.clear();
  }
}
