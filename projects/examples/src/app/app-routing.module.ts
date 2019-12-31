import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ROUTE_COMPONENTS } from './index';

const routes: Routes = ROUTE_COMPONENTS;

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule { }
