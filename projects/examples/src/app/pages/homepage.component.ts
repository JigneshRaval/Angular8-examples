import { Component, ViewChild } from '@angular/core';



@Component({
    selector: 'app-home-page',
    template: `
            <div>
                <router-outlet></router-outlet>

                <!-- <example1-tab-main-component></example1-tab-main-component>

                <example2-main-component></example2-main-component>

                <example3-carousel-main-component></example3-carousel-main-component>

                <div dialogAnchor></div>

                <div class="open-button" (click)='openDialogBox()'>Open dialog box</div>

                <template-driven-form-1-component></template-driven-form-1-component>

                <duplicate-form-fields></duplicate-form-fields>

                <filter-list-view-component></filter-list-view-component>

                <list-view-component></list-view-component>

                <footnote-filter-component></footnote-filter-component>

                <example-observable-list></example-observable-list>

                <example-observable-subject></example-observable-subject>

                 <obervable-with-async-pipe></obervable-with-async-pipe>

                <named-router-component></named-router-component>
                -->

                <!-- <article-list-component></article-list-component> -->

                <!-- <template-driven-form-component></template-driven-form-component>

                <form-select-dropdown-component></form-select-dropdown-component>

                <connected-dropdown-component></connected-dropdown-component>

                 <get-articles-component></get-articles-component>


                <get-articles-using-shared-service-component></get-articles-using-shared-service-component>
                -->
            </div>
    `
})
export class HomePage {

}
