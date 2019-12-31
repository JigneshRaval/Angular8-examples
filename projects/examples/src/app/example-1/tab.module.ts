import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';

import { Example1TabComponent } from './tab.component';
import { Example1TabContentComponent } from './tab-content.component';
import { Example1TabMainComponent } from './tab-main.component';

export const routes: Routes = [
    { path: '', component: Example1TabMainComponent, pathMatch: 'full' }
];

@NgModule({
    imports: [
        CommonModule,
        RouterModule.forChild(routes)
    ],
    declarations: [
        Example1TabComponent,
        Example1TabContentComponent,
        Example1TabMainComponent
    ],
    exports: [
        // Example1TabMainComponent
    ]
})
export class TabsModule {

}
