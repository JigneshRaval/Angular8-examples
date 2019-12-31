// https://www.concretepage.com/angular-2/angular-2-4-named-router-outlet-popup-example
// http://onehungrymind.com/named-router-outlets-in-angular-2/

/**
 * To use named router outlet just mention outlet in your router Ex.:
 * {
        path: 'tips', component: AngularTipsComponent,
        children: [
            { path: '', component: ChildRoute1Component, outlet: 'tab1-content' },
            { path: 'tab-item-1', component: ChildRoute1Component, outlet: 'tab1-content' }
        ]
    },

    and use <a [routerLink]="[{ outlets: { 'tab1-content': ['tab-item-1'] } }]">Child Router 1 content</a>
 */

import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
    selector: 'named-router-component',
    template: `
        <nav>
            <a [routerLink]="[{ outlets: { 'tab1-content': ['tab-item-1'] } }]">Child Router 1 content</a>
            <a [routerLink]="[{ outlets: { 'tab2-content': ['tab-item-2'] } }]">Child Router 2 content</a>
            <button (click)="changeRouter($event)">Child Router 3 using OnClick</button>
        </nav>
        <router-outlet name="tab1-content"></router-outlet>
        <router-outlet name="tab2-content"></router-outlet>
        <router-outlet name="tab3-content"></router-outlet>
    `
})
export class NamedRouterComponent {

    constructor(private router: Router) {}

    changeRouter() {
        // Dynamically navigate to route
        this.router.navigate(['/tips', { outlets: { 'tab3-content': ['tab-item-3'] } }]);
    }
}
