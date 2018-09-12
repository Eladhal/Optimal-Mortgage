import {Component, OnInit} from '@angular/core';
import {MortgageData} from '../mortgagePlane';
import {MortgagePlan} from '../mortgagePlane';
import {Plans} from '../mortgagePlane';
import {Period} from '../mortgagePlane';
import {HttpService} from '../services/http.service';


@Component({
    selector: 'app-data-form',
    templateUrl: './data-form.component.html',
    styleUrls: ['./data-form.component.css']
})
export class DataFormComponent implements OnInit {
    MPlans: string[] = Plans;
    Period: string[] = Period;
    mortgageData: MortgageData;
    minInterest: Number = 0;
    maxInterest: Number = 100;

    constructor(private http: HttpService) {
        this.mortgageData = new MortgageData();
    }

    ngOnInit() {
    }

    logForm() {
        this.http.addMortgage(this.mortgageData);
    }

    btnAddNewPlan() {
        const plan = new MortgagePlan();
        plan.id = this.mortgageData.plans.length + 1;
        this.mortgageData.plans.push(plan);
    }

    btnRemovePlan(plan: MortgagePlan) {
        const indx = this.mortgageData.plans.findIndex(rec => rec.id === plan.id);
        if (indx > -1) {
            this.mortgageData.plans.splice(indx, 1);
        }
    }
}
