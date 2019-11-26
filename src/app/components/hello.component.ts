import { Component, Input } from '@angular/core';

@Component({
    selector: 'al-app-iva',
    template: `<div class="example">
    <h1>My IVA App : {{name}}!</h1>
  </div>`,
    styles: [`h1 { font-family: Lato; }`]
})
export class HelloComponent {
    @Input() name: string;
}
