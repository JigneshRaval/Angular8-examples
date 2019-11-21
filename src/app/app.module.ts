import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';

// COMPONENTS
// ================================
import { HelloComponent } from './components/hello.component';
import { Hello2Component } from './components/hello2.component';
import { CardComponent } from './components/card.component';

// DIRECTIVES
// ================================
import { CORE_DIRECTIVES } from './directives/index';

// SERVICES
// ================================
import { IDBService } from './services/indexedDb.service';


@NgModule({
  imports: [BrowserModule, FormsModule],
  declarations: [
    AppComponent,
    HelloComponent,
    Hello2Component,
    CardComponent,
    CORE_DIRECTIVES
  ],
  providers: [
    IDBService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
