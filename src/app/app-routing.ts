import { ModuleWithProviders} from "@angular/core";
import { RouterModule, Routes } from '@angular/router';

import {FruitEdit} from "./fruits-edit/fruits-edit.component";
import {PageNotFoundComponent} from "./page-not-found/page-not-found.component";
import {FruitList} from "./fruits-list/fruits-list.component";

const appRoutes: Routes = [
  {path: '', redirectTo: '/list-fruit', pathMatch: 'full'},
  {path: 'list-fruit', component: FruitList},
  {path: 'edit-fruit', component: FruitEdit, children: [
      {path: ':id', component: FruitEdit}]},
  {path: '**', component: PageNotFoundComponent}
];

export const appRoutingProviders: any[] = [];
export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);
