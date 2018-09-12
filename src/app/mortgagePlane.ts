export class MortgageData {
    mortgageSum: number;
    propValue: number;
    netIncome: number;
    plans: MortgagePlan[] = [];

    // constructor(mortgageSum: number = 0, propValue: number = 0, netIncome: number = 0, plans: MortgagePlan[] = []) {
    //     this.mortgageSum = mortgageSum;
    //     this.propValue = mortgageSum;
    //     this.netIncome = mortgageSum;
    //     this.plans = plans;
    // }
}


export class MortgagePlan {
    id: number;
    plan: string;
    sum: number;
    period: string;
    interest: number;
}

export const Plans: string[] = [
    'פריים' ,
    'קבועה לא צמודה' ,
    'משתנה צמודה' ,
    'משתנה לא צמודה' ,
    'קבועה צמודה'
]

export const Period: string[] = [
    '0 - 10' ,
    '11 - 15' ,
    '16 - 20' ,
    '21 - 30' ,
]