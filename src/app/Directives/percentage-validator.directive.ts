import {Directive} from '@angular/core';
import {AbstractControl, NG_VALIDATORS, Validator} from '@angular/forms';

@Directive({
    selector: '[appPercentageValidator]',
    providers: [{provide: NG_VALIDATORS, useExisting: PercentageValidatorDirective, multi: true}]
})
export class PercentageValidatorDirective implements Validator {

    constructor() {
    }

    validate(control: AbstractControl) {
        const elementValue = control.value;
        if (elementValue < 0 || elementValue > 100) {
            return {'cus_percentage': 'Ned to enter numbers between 0 to 100'};
        }
    }

}
