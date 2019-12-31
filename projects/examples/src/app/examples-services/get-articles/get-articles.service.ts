// REF : https://symbiotics.co.za/using-observables-in-angular-4-to-get-data-from-an-api-service/

import { Injectable } from '@angular/core';
// import { Http } from '@angular/http';
import { HttpClient } from '@angular/common/http';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';

@Injectable()
export class GetArticlesService {
    private _postURL = 'https://jsonplaceholder.typicode.com/posts/1/comments';

    constructor(private http: HttpClient) { }

    getPosts() {
        return this.http.get(this._postURL).map(response => response).catch(this.handleErrors);
    }

    handleErrors(error) {
        console.log('Error:', error);
        return error;
    }
}
