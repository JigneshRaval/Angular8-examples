import { Component, ViewChild } from '@angular/core';

import { DialogComponent } from './dialog.component';
import { DialogAnchorDirective } from './dialog-anchor.directive';

@Component({
    selector: 'dynamic-dialog-main',
    template: `
    <!-- Add above Dialog in this container -->
    <div dialogAnchor></div>

    <div class="btn btn-primary" (click)='openDialogBox()'>Open dialog box</div>
	`,
})
export class MainDialogComponent {
    @ViewChild(DialogAnchorDirective, { static: false }) dialogAnchor: DialogAnchorDirective;

    openDialogBox() {
        this.dialogAnchor.createDialog(DialogComponent);
    }
}


// REF : https://dzone.com/articles/how-to-dynamically-create-a-component-in-angular
// import {
//     Component,
//     ViewChild,
//     ViewContainerRef,
//     ComponentFactoryResolver,
//     ComponentRef,
//     ComponentFactory
// } from '@angular/core';
// import { MessageComponent } from './message.component';

// @Component({
//     selector: 'app-root',
//     template: `
//         <div style="text-align:center">
//         <h1>
//             Welcome to {{ title }}!
//         </h1>
//         <ng-template #messagecontainer>
//         </ng-template>
//     < /div>
// `
// })
// export class AppComponent {
//     title = 'app';
//     componentRef: any;

//     @ViewChild('messagecontainer', { read: ViewContainerRef, static: true }) entry: ViewContainerRef;

//     constructor(private resolver: ComponentFactoryResolver) { }

//     createComponent(message) {
//         this.entry.clear();
//         const factory = this.resolver.resolveComponentFactory(MessageComponent);
//         this.componentRef = this.entry.createComponent(factory);
//         this.componentRef.instance.message = message;
//     }

//     destroyComponent() {
//         this.componentRef.destroy();
//     }
// }
