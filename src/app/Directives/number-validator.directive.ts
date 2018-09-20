import {Directive} from '@angular/core';
import {AbstractControl, NG_VALIDATORS, Validator} from '@angular/forms';

@Directive({
    selector: '[appNumberValidator]',
    providers: [{provide: NG_VALIDATORS, useExisting: NumberValidatorDirective, multi: true}]

})
export class NumberValidatorDirective implements Validator {

    constructor() {
    }

    validate(control: AbstractControl) {
        const elementValue = control.value;
        if (elementValue != null) {
            const str = elementValue.replace(/,/g, '');
            if (isNaN(Number(str))) {
                return {'cus_num': 'Need to enter numbers'};
            }
        }

    }

}