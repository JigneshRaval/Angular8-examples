// ./app/shared/hidden.directive.ts
import { Directive, ElementRef, Renderer, Input } from "@angular/core";

// Directive decorator
@Directive({
  selector: "[widgetEligiblity]"
})
// Directive class
export class WidgetEligibilityDirective {
  eligibility: boolean = false;
  pageName: string = "";
  @Input() params: string;
  pageData: any = {};

  constructor(private el: ElementRef, private renderer: Renderer) {
    // Use renderer to render the element with styles
    // renderer.setElementStyle(el.nativeElement, "display", "none");
  }

  ngOnInit() {
    console.log("this.params === ", this.params);

    this.pageName = this.getPageName(window.location.href);
    this.checkEligibility(this.pageName, this.params);
  }

  checkEligibility(pageNam, selector) {
    this.pageData = [
      {
        asset: {
          login: {
            "al-app-iva": {
              assetType: "text",
              assetValue: true,
              assetKey: "arvind"
            }
          }
        }
      }
    ];

    if (this.pageData) {
      console.log("hjds" + this.pageData[0].asset[this.pageName]);
      console.log(
        "hjds1" + this.pageData[0].asset["login"][selector].assetValue
      );
      if (this.pageData[0].asset["login"][selector].assetValue) {
        return true;
      } else {
        // this.el.nativeElement.style.display = "none";
        this.renderer.setElementStyle(this.el.nativeElement, "display", "none");
        return false;
      }
    }

    /* this.idbService.getRecordFromObjStore('PageEligibityData', pageNam).subscribe(
            (pageData) => {
                try {
                    if (this.pageData) {
                        if (this.pageData[0].asset[this.pageName][selector].assetValue) {
                            return true;
                        }else {
                            return false;
                        }
                    }
                } catch (error) {
                    console.error('Error in calling service.', error);
                }
            },
            (error) => {
                console.error('Error in calling service.', error);
            }); */
  }

  public getPageName(pageUrl) {
    let urlStr, pageName;
    if (pageUrl && pageUrl.indexOf("#/web") > 0) {
      urlStr = pageUrl.split("#/web/")[1];
      if (urlStr.indexOf("?")) {
        pageName = urlStr.split("?")[0];
        pageName = pageName.substring(
          pageName.indexOf("/") + 1,
          pageName.length
        );
      }
    } else if (pageUrl && pageUrl.indexOf("/web") > 0) {
      urlStr = pageUrl.split("/web/")[1];
      if (urlStr) {
        if (urlStr.indexOf("?")) {
          pageName = urlStr.split("?")[0];
          pageName = pageName.substring(
            pageName.indexOf("/") + 1,
            pageName.length
          );
        }
      }
    }
    return pageName;
  }
}
