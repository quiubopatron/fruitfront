import { ModuleWithProviders} from "@angular/core";
import { RouterModule, Routes } from '@angular/router';

import {FruitsUpdateComponent} from "./fruits-update/fruits-update.component";
import {PageNotFoundComponent} from "./page-not-found/page-not-found.component";
import {FruitsAddComponent} from "./fruits-add/fruits-add.component";

const appRoutes: Routes = [
  {path: 'home', component: FruitsAddComponent},
  {path: 'update-fruit/:id', component: FruitsUpdateComponent },
  {path: '**', component: PageNotFoundComponent}
]

export const appRoutingProviders: any[] = [];
export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);
