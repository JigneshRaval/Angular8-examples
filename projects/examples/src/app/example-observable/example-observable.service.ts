// Ref. : https://medium.com/@luukgruijs/understanding-creating-and-subscribing-to-observables-in-angular-426dbf0b04a3
import { Observable } from 'rxjs/Observable';
import { Injectable } from '@angular/core';
// import { Http, Response } from '@angular/http';
import { HttpClient } from '@angular/common/http';
import 'rxjs/add/operator/map';

@Injectable()
export class ExampleObservableService {

    constructor(public http: HttpClient) {}

    public fetchUsers() {
        // We have now created a simple service with a fetchUsers method that returns an observable.
        return this.http.get('https://jsonplaceholder.typicode.com/users').map((res: Response) => res);
    }
}
