/* tslint:disable:no-unused-variable */
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

let mockData = [{
    'asset': {
        'ag_login_params': {
            'al-app-iva': {
                'assetType': 'arvind',
                'assetValue': 'arvind',
                'assetKey': 'arvind'
            }
        }

    }
}];

@Injectable()
export class IDBService {
    public getRecordFromObjStore(storeName: string, key: string) {
        return of(mockData);
    }
}
