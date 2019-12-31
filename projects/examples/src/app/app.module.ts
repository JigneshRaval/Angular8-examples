import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { HomePage } from './pages/homepage.component'
import { ContactPage } from './pages/contact-us.component'
// import { ROUTING } from './app.routing'

// All Components, Entry Components, Directives, Pipes and Services exported from index.ts
import { MY_EXAMPLES } from './index';
import { TabsModule } from './example-1/tab.module';

import { ArticlesModule } from './example-crud/articles.module';

@NgModule({
    declarations: [
        AppComponent,
        ContactPage,
        HomePage,
        MY_EXAMPLES.COMPONENTS,
        MY_EXAMPLES.DIRECTIVES,
        MY_EXAMPLES.PIPES
    ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        FormsModule,
        HttpClientModule,
        // ROUTING,
        RouterModule,
        TabsModule,
        ArticlesModule,
    ],
    providers: [MY_EXAMPLES.SERVICES],
    entryComponents: [MY_EXAMPLES.ENTRY_COMPONENTS],
    bootstrap: [AppComponent]
})
export class AppModule { }
