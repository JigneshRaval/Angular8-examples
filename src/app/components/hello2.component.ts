import { Component, Input } from "@angular/core";

@Component({
  selector: "hello2",
  template: `
    <div class="example">
      <h1>Hello 2 component : {{ name }}!</h1>
      <h3>
        <ng-content></ng-content>
      </h3>
    </div>
  `,
  styles: [
    `
      h1 {
        font-family: Lato;
      }
    `
  ]
})
export class Hello2Component {
  @Input() name: string;
}
