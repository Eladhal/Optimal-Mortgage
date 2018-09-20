import {Pipe, PipeTransform} from '@angular/core';


@Pipe({name: 'addCommas'})
export class AddCommas implements PipeTransform {
    transform(num: number): string {
        if (num) {
            return (num.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ','));
        }
        else {
            return '';
        }
    }
}


