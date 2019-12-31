import { Component, EventEmitter } from '@angular/core';

@Component({
    selector: 'dynamic-dialog',
    template: `

        <div class="modal fade show" tabindex="-1" role="dialog">
            <div class="modal-dialog" role="document">
                <div class="modal-content">
                    <div class="modal-header">
                        <h5 class="modal-title">Modal title</h5>
                        <button type="button" class="close" data-dismiss="modal" aria-label="Close" (click)="onClickedExit()">
                            <span aria-hidden="true">&times;</span>
                        </button>
                    </div>
                    <div class="modal-body">
                        <p>Modal body text goes here.</p>
                    </div>
                    <div class="modal-footer">
                        <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
                        <button type="button" class="btn btn-primary">Save changes</button>
                    </div>
                </div>
            </div>
        </div>

	`,
    styles: [`
        .modal.show {
            display: block
        }
    `]
})
export class DialogComponent {
    close = new EventEmitter();

    onClickedExit() {
        this.close.emit(event);
    }
}
