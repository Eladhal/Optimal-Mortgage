import {Injectable} from '@angular/core';
import {MortgageData} from '../classes/mortgagePlane';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';

@Injectable({
    providedIn: 'root'
})
export class HttpService {

    constructor(private http: HttpClient) {
    }

    addMortgage(data: MortgageData): Observable<any> {
        return this.http.post<MortgageData>('api/mortgage-plan', data);
    }
}
