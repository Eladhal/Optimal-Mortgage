export class MortgageData {
    mortgageSum: number;
    propValue: number;
    netIncome: number;
    plans: MortgagePlan[] = [];
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