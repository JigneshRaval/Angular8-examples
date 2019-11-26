import {
    Input,
    Directive,
    OnInit,
    TemplateRef,
    ViewContainerRef,
    OnChanges,
    OnDestroy
} from '@angular/core';
import { Subscription } from 'rxjs';

@Directive({
    selector: '[paramsDir]'
})
export class ParamsDirective implements OnInit, OnDestroy, OnChanges {
    @Input() paramsDirOf: any;

    // private _routeParamsSubscription: Subscription;

    constructor(
        private container: ViewContainerRef,
        private template: TemplateRef<any>
    ) { }

    ngOnInit() {
        console.log(
            'this.viewContainer === ',
            this.paramsDirOf,
            this.container,
            this.template
        );

        this.container.createEmbeddedView(this.template, {
            $implicit: this.paramsDirOf
        });

        /* this._routeParamsSubscription = this.route.paramMap.subscribe(
          (paramMap: any) =>
            // Copy all route params on the context
            Object.assign(this.context, paramMap.params)
        ); */
    }

    ngOnChanges() {
        console.log(
            'this.viewContainer === ',
            this.paramsDirOf,
            this.container,
            this.template
        );
    }

    ngOnDestroy() {
        // this._routeParamsSubscription.unsubscribe();
    }
}
