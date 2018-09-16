import {Directive, ElementRef, Input, OnInit} from '@angular/core';

@Directive({
    selector: '[appSelectInput]'
})
export class SelectInputDirective implements OnInit {
    @Input() selectFlag: boolean;

    constructor(private elementRef: ElementRef) {
    }

    ngOnInit() {
        if (this.selectFlag === true) {
            this.elementRef.nativeElement.focus();
        }
    }

}
