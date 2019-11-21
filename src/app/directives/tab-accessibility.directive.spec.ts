/* tslint:disable:no-unused-variable */

// tab-accessibility.directive.spec.ts

import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { Component, DebugElement, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';

import { AlTabAccessibilityDirective } from './tab-accessibility.directive';

@Component({
    template: `<p-tabview alTabAccessibility>
	<div class="ui-tabview ui-widget ui-widget-content ui-corner-all ui-tabview-top">
		<ul p-tabviewnav="" role="tablist" class="ui-tabview-nav ui-helper-reset ui-helper-clearfix ui-widget-header ui-corner-all">
            <li role="tab" class="ui-state-default ui-corner-top ui-tabview-selected ui-state-active" aria-expanded="true" aria-selected="true">
                <a href="#">
                    <span class="ui-tabview-title">Tab I</span>
				</a>
			</li>
            <li role="tab" class="ui-state-default ui-corner-top">
                <a href="#">
                    <span class="ui-tabview-title">Tab II</span>
				</a>
			</li>
		</ul>
		<div class="ui-tabview-panels">
			<div class="ui-tabview-menu">
				<a class="ui-tabview-menu-link" href="javascript:void(0);">Choose an Option</a>
			</div>
			<p-tabpanel header="Tab I">
				<div class="ui-tabview-panel ui-widget-content" role="tabpanel" style="display: block;" aria-hidden="false">
					The story begins as Don Vito Corleone, the head of a New York Mafia family, overseeshis daughter's wedding. His beloved son
					ichael has just come home from the war, but does not intend to become part of his father's business. T hrough Michael's
					life the nature of the family business becomes clear. The business of the family is just like the head of the family,
					kind and benevolent to those who give respect, but given to ruthless violence whenever anything stands against the
					good of the family.
				</div>
			</p-tabpanel>
			<p-tabpanel header="Tab II">
				<div class="ui-tabview-panel ui-widget-content" role="tabpanel" style="display: none;" aria-hidden="true">
					Francis Ford Coppola's legendary continuation and sequel to his landmark 1972 film, The_Godfather parallels the young Vito
					Corleone's rise with his son Michael's spiritual fall, deepening The_Godfather's depiction of the dark side of the
					American dream. In the early 1900s, the child Vito flees his Sicilian village for America after the local Mafia kills
					his family. Vito struggles to make a living, legally or illegally, for his wife and growing brood in Little Italy,
					killing the local Black Hand Fanucci after he demands his customary cut of the tyro's business. With Fanucci gone,
					Vito's communal stature grows.
				</div>
			</p-tabpanel>
		</div>
	</div>
</p-tabview>`
})
class MockTabsComponent {
}

describe('AlTabAccessibilityDirective', () => {
    let component: MockTabsComponent;
    let fixture: ComponentFixture<MockTabsComponent>;
    let inputEl: DebugElement;
    let directive: any;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [
                MockTabsComponent,
                AlTabAccessibilityDirective
            ],
            schemas: [CUSTOM_ELEMENTS_SCHEMA]
        });

        fixture = TestBed.createComponent(MockTabsComponent);
        component = fixture.componentInstance;
        let inputElement: DebugElement = fixture.debugElement.query(By.directive(AlTabAccessibilityDirective));
        directive = inputElement.injector.get(AlTabAccessibilityDirective);

        inputEl = fixture.debugElement.query(By.css('ul[role="tablist"]:first-child'));
        fixture.detectChanges();
    }));

    it('should call ngAfterViewInit()', () => {
        directive.ngAfterViewInit();
    });

    // Left arrow key press event
    // ========================================
    it('should call keydownEventListener() tabOrientation should be available for left arrow key', () => {
        directive.tabOrientation = 'left';
        expect(directive.tabOrientation).toBe('left');
        const event = {
            keyCode: 37,
            target: {
                parentNode: {
                    index: 0
                }
            }
        };
        directive.keydownEventListener(event);
    });

    it('should call keydownEventListener() for left arrow key', () => {
        const event = {
            keyCode: 37,
            target: {
                parentNode: {
                    index: 0
                }
            }
        };
        directive.keydownEventListener(event);
    });

    it('should call keydownEventListener() index should be equal to tabs length', () => {
        const event = {
            keyCode: 37,
            target: {
                parentNode: {
                    index: 1
                }
            }
        };
        directive.keydownEventListener(event);
    });


    // Right arrow key press event
    // ========================================
    it('should call keydownEventListener() tabOrientation should be available for right arrow key', () => {
        directive.tabOrientation = 'left';
        expect(directive.tabOrientation).toBe('left');
        const event = {
            keyCode: 39,
            target: {
                parentNode: {
                    index: 0
                }
            }
        };
        directive.keydownEventListener(event);
    });

    it('should call keydownEventListener() for right arrow key', () => {
        const event = {
            keyCode: 39,
            target: {
                parentNode: {
                    index: 0
                }
            }
        };
        directive.keydownEventListener(event);
    });

    it('should call keydownEventListener() index should be equal to tabs length', () => {
        const event = {
            keyCode: 39,
            target: {
                parentNode: {
                    index: 1
                }
            }
        };
        directive.keydownEventListener(event);
    });

});
