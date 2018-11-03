import {Directive, Input} from '@angular/core';
import {AbstractControl, NG_VALIDATORS, Validator} from '@angular/forms';
import {MortgagePlan} from '../classes/mortgagePlane';


@Directive({
    selector: '[appSumValidator]',
    providers: [{provide: NG_VALIDATORS, useExisting: SumValidatorDirective, multi: true}]

})
export class SumValidatorDirective implements Validator {

    @Input() mPlans: MortgagePlan[];
    @Input() mSum: number;
    @Input() indx: number;

    constructor() {
    }

    validate(control: AbstractControl) {
        if (control.value !== null) {
            const str = control.value.replace(/,/g, '');
            const elementValue = +str;
            let sum = 0;

            for (let i = 0; i < this.indx; i++) {
                sum = sum + this.mPlans[i].sum;
            }

            sum = sum + elementValue;
            if (sum > this.mSum) {
                return {'cus_sum': 'sum of plans is bigger than mortgage sum'};
            }
        }
    }
}