import {Injectable} from '@angular/core';
import {MortgageData} from '../mortgagePlane';
import { HttpClient } from '@angular/common/http';


@Injectable({
    providedIn: 'root'
})
export class HttpService {

    constructor(private http: HttpClient) {
    }

    addMortgage(data: MortgageData) {
        console.log(data);
        this.http.post<MortgageData>('aaa', data).subscribe();
    }
}
