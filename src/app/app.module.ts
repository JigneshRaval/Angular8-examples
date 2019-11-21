import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { FormsModule } from "@angular/forms";

import { AppComponent } from "./app.component";
import { HelloComponent } from "./hello.component";
import { Hello2Component } from "./hello2.component";
import { CardComponent } from "./card.component";

// DIRECTIVES
// ================================
import { CORE_DIRECTIVES } from './directives/index';


@NgModule({
  imports: [BrowserModule, FormsModule],
  declarations: [
    AppComponent,
    HelloComponent,
    Hello2Component,
    CardComponent,
    CORE_DIRECTIVES
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
