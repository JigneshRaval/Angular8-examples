/* tslint:disable:no-unused-variable */

// widget-eligiblity.directive.spec.ts

import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { Component, DebugElement, CUSTOM_ELEMENTS_SCHEMA, Injectable, TemplateRef, ViewContainerRef } from '@angular/core';
import { IDBService } from '../services/indexedDb.service';
import { Observable, of, throwError } from 'rxjs';

// Directive Imports
// =============================
import { WidgetEligibilityDirective } from './widget-eligiblity.directive';

// MockData
// =============================
let mockData;

let mockResponse = [{
    'asset': {
        'ag_login_params': {
            'al-app-iva': {
                'assetType': 'code',
                'assetValue': 'design',
                'assetKey': 'news'
            }
        }

    }
}];

// MockComponent
// =============================
@Component({
    template: `<al-app-iva *widgetEligiblity="'al-app-iva'"></al-app-iva> `
})
class MockTabsComponent {
    constructor() { }
}


describe('WidgetEligibilityDirective', () => {
    let component: MockTabsComponent;
    let fixture: ComponentFixture<MockTabsComponent>;
    let inputEl: DebugElement;
    let directive: any;
    let testBedService: IDBService;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [
                MockTabsComponent,
                WidgetEligibilityDirective
            ],
            providers: [
                WidgetEligibilityDirective,
                TemplateRef,
                ViewContainerRef,
                // { provide: AppUtility, useClass: MockAppUtilityService },
                { provide: IDBService, useClass: MockIDBService },
            ],
            schemas: [CUSTOM_ELEMENTS_SCHEMA]
        });

        fixture = TestBed.createComponent(MockTabsComponent);
        component = fixture.componentInstance;
        testBedService = TestBed.get(IDBService);

        // let inputElement: DebugElement = fixture.debugElement.query(By.directive(WidgetEligibilityDirective));
        // directive = fixture.debugElement.injector;

        fixture.detectChanges();

    }));

    it('should call checkEligibility() function with valid data', () => {
        mockData = mockResponse;
    });

    it('should call checkEligibility() function with assetValue = null', () => {
        mockResponse[0]['asset']['ag_login_params']['al-app-iva'].assetValue = null;
        mockData = mockResponse
    });

    it('should call checkEligibility() function : cover catch block', () => {
        mockData = "test";
    });

    it('should call checkEligibility() function with error : Cover subscribe error block', () => {
        mockData = null;
    });

});


// Mock IndexedDB Services
// ==============================
@Injectable()
class MockIDBService {
    cc = false;
    constructor() { }

    public getRecordFromObjStore(store, pageNam): any {

        if (mockData) {
            return of(mockData);
        } else {
            // return Observable.throw('Error in calling getRecordFromObjStore() from idb service.');
            return throwError(new Error('Error in calling getRecordFromObjStore() from idb service.'));
        }
    }
}


// Mock appUtility Services
// ==============================
@Injectable()
class MockAppUtilityService {
    constructor() { }

    public getPageNameFromURL(): any {
        return 'login';
    }

}
