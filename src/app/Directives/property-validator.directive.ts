import {Directive, Input} from '@angular/core';
import {AbstractControl, NG_VALIDATORS, Validator} from '@angular/forms';

@Directive({
    selector: '[appPropertyValidator]',
    providers: [{provide: NG_VALIDATORS, useExisting: PropertyValidatorDirective, multi: true}]

})
export class PropertyValidatorDirective implements Validator {

    @Input() mortgValue: number;

    constructor() {
    }

    validate(control: AbstractControl) {
        if (control.value !== null) {
            const str = control.value.replace(/,/g, '');
            const propertyValue = +str;
            if (propertyValue < this.mortgValue) {
                return {'cus_value': 'value of mortgage is bigger than property value'};
            }
        }
    }
}
