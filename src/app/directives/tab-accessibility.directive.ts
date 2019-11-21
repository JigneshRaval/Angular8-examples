// tab-accessibility.directive.ts

import { Directive, ElementRef, AfterViewInit, Renderer2 } from '@angular/core';

@Directive({
    selector: '[alTabAccessibility]'
})
export class AlTabAccessibilityDirective implements AfterViewInit {

    public tabs = [];
    public tabOrientation: any;

    // Key reference
    public keys = {
        end: 35,
        home: 36,
        left: 37,
        up: 38,
        right: 39,
        down: 40,
        delete: 46
    };

    constructor(private el: ElementRef, private renderer: Renderer2) { }

    ngAfterViewInit() {
        let tabs: any;

        let tabNav = this.el.nativeElement.querySelector('ul[role="tablist"]:first-child');
        tabs = tabNav.querySelectorAll('li');

        this.tabs = Array.from(tabs);

        this.tabOrientation = this.el.nativeElement.getAttribute('orientation');

        if (this.tabs && this.tabs.length > 0) {
            this.tabs.forEach((item, index) => {
                item.addEventListener('keydown', this.keydownEventListener.bind(this));
                item.index = index;
            });
        }
    }

    // Handle keydown on tabs
    keydownEventListener(event: any) {
        const key = event.keyCode;

        switch (key) {
            // On press of "End" key -> Activate last tab
            // case this.keys.end:
            //     event.preventDefault();
            //     this.activateTab(this.tabs[this.tabs.length - 1]);
            //     break;

            // // On press of "Home" key -> Activate first tab
            // case this.keys.home:
            //     event.preventDefault();
            //     this.activateTab(this.tabs[0]);
            //     break;

            // // up and down arrow keys in keydown event
            // // when Tab orientation or alignment is vertical ( on Left or Right )
            // case this.keys.up:
            //     // because we need to prevent page scroll >:)
            //     if (this.tabOrientation) {
            //         event.preventDefault();
            //         this.activatePrevTab(event);
            //     }
            //     break;

            // case this.keys.down:
            //     // because we need to prevent page scroll >:)
            //     if (this.tabOrientation) {
            //         event.preventDefault();
            //         this.activateNextTab(event);
            //     }
            //     break;

            // left and right arrow keys in keydown event
            // when Tab orientation or alignment is horizontal ( on Top or Bottom )
            case this.keys.left:
                if (!this.tabOrientation) {
                    this.activatePrevTab(event);
                }
                break;

            case this.keys.right:
                if (!this.tabOrientation) {
                    this.activateNextTab(event);
                }
                break;
        }
    }

    // Activates any given tab panel
    activateTab(tab: any, setFocus?: boolean) {
        setFocus = setFocus || true;

        // Display tab content by executing click event, when tab gets focus
        // tab.click();

        // Set focus when required
        if (setFocus) {
            tab.querySelector('a').focus();
        }
    }

    // Activate previous tab on press of "Left" arrow key
    activatePrevTab(event: any) {
        const index = event.target.parentNode.index;
        if ((index - 1) === (this.tabs.length)) {
            this.activateTab(this.tabs[0]);
        } else if (index === 0) {
            this.activateTab(this.tabs[(this.tabs.length - 1)]);
        } else {
            this.activateTab(this.tabs[(index - 1)]);
        }
    }

    // Activate next tab on press of "Right" arrow key
    activateNextTab(event: any) {
        const index = event.target.parentNode.index;
        if ((index + 1) === (this.tabs.length)) {
            this.activateTab(this.tabs[0]);
        } else {
            this.activateTab(this.tabs[(index + 1)]);
        }
    }

}

// Keyboard Support ( https://www.w3.org/TR/2017/NOTE-wai-aria-practices-1.1-20171214/examples/tabs/tabs-1/tabs.html )
// Key          function
// ========     ========================================================
// Tab	        When focus moves into the tab list, places focus on the active tab element.
//              When the tab list contains the focus, moves focus to the next element in the tab sequence, which is the tabpanel element.
// Right Arrow	Moves focus to the next tab.
//              If focus is on the last tab, moves focus to the first tab.
//              Activates the newly focused tab.
// Left Arrow	Moves focus to the previous tab.
//              If focus is on the first tab, moves focus to the last tab.
//              Activates the newly focused tab.
// Home         Moves focus to the first tab and activates it.
// End          Moves focus to the last tab and activates it.
