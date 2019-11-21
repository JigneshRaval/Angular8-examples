import { Directive, Input, TemplateRef, ViewContainerRef } from '@angular/core';
import { IDBService } from '../services/indexedDb.service';

@Directive({
    selector: '[widgetEligiblity]',
})
export class WidgetEligibilityDirective {

    eligibility: boolean = false;
    pageName: string;
    @Input() params: string;
    pageData: any = {};
    selName: string;

    constructor(
        private idbService: IDBService,
        private templateRef: TemplateRef<any>,
        private viewContainer: ViewContainerRef
    ) {
    }
    @Input()
    set widgetEligiblity(val: any) {
        this.pageName = 'ag_' + 'login' + '_params';
        let value = this.checkEligibility(this.pageName, val);
        if (value) {
            this.viewContainer.createEmbeddedView(this.templateRef);
        } else {
            this.viewContainer.clear();
        }
    }

    checkEligibility(pageNam, selector) {
        this.idbService.getRecordFromObjStore('PageEligibilityData', pageNam).subscribe((pageData: any) => {
            try {
                if (pageData) {
                    if (pageData[0]['asset'][pageNam][selector].assetValue) {
                        this.eligibility = pageData[0]['asset'][pageNam][selector].assetValue;
                    } else {
                        this.eligibility = pageData[0]['asset'][pageNam][selector].assetValue;
                    }
                }
            } catch (error) {
                console.error('Error in calling service.', error);
                return false;
            }
        },
            (error) => {
                console.error('Error in calling service.', error);
                return false;
            });

        return this.eligibility;
    }
}
