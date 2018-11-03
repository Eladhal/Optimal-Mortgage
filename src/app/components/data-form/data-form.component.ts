import {Component, OnInit} from '@angular/core';
import {MortgageData} from '../../classes/mortgagePlane';
import {MortgagePlan} from '../../classes/mortgagePlane';
import {Plans} from '../../classes/mortgagePlane';
import {Period} from '../../classes/mortgagePlane';
import {HttpService} from '../../services/http.service';


@Component({
    selector: 'app-data-form',
    templateUrl: './data-form.component.html',
    styleUrls: ['./data-form.component.css']
})
export class DataFormComponent implements OnInit {
    MPlans: string[] = Plans;
    Period: string[] = Period;
    mortgageData: MortgageData;
    averageInterest: any;

    constructor(private http: HttpService) {
        this.mortgageData = new MortgageData();
    }

    ngOnInit() {
    }

    logForm() {
        this.http.addMortgage(this.mortgageData).subscribe((answer) => {
            console.log(answer);
            this.averageInterest = answer;
        });
    }

    ConvertToNum(num: string): number {
        const str = num.replace(/,/g, '');
        return parseInt(str, 10);
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
