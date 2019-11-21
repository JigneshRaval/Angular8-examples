import {
  Directive,
  ViewContainerRef,
  OnChanges,
  TemplateRef,
  Input,
  OnInit
} from "@angular/core";

@Directive({
  selector: "[appNgLoop]"
})
export class NgLoopDirective implements OnChanges, OnInit {
  @Input() appNgLoopOf: Array<any>;

  constructor(
    private container: ViewContainerRef,
    private template: TemplateRef<any>
  ) {
    console.log("appNgLoopOf === ", this.appNgLoopOf);
  }

  ngOnInit() {
    console.log("OnInit appNgLoopOf === ", this.appNgLoopOf);
    for (const input of this.appNgLoopOf) {
      this.container.createEmbeddedView(this.template, {
        $implicit: input,
        index: this.appNgLoopOf.indexOf(input)
      });
    }
  }

  ngOnChanges() {
    // this.container.clear();
    /* console.log("appNgLoopOf === ", this.appNgLoopOf);
    for (const input of this.appNgLoopOf) {
      this.container.createEmbeddedView(this.template, {
        $implicit: input,
        index: this.appNgLoopOf.indexOf(input)
      });
    } */
  }
}
