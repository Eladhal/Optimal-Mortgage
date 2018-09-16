import {Injectable} from '@angular/core';
import {MortgageData} from '../classes/mortgagePlane';
import { HttpClient } from '@angular/common/http';


@Injectable({
    providedIn: 'root'
})
export class HttpService {

    constructor(private http: HttpClient) {
    }

    addMortgage(data: MortgageData) {
        this.http.post<MortgageData>('api/mortgage-plan', data).subscribe();
    }
}
