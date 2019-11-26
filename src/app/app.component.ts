import { Component } from '@angular/core';
import { Title } from '@angular/platform-browser';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css']
})
export class AppComponent {
    name = 'Angular';
    numbers = [1, 2, 3];

    myUserName = 'Jignesh';

    sampleObject = {
        name: 'Jignesh',
        age: 38
    }

    constructor(private titleService: Title) { }

    public setTitle(newTitle: string) {
        this.titleService.setTitle(newTitle);
    }
}
