import { Injectable } from '@angular/core';
import { InvestmentData } from "../types/investment-data";
import { InvestmentResult } from "../types/investment-result";
import { Subject } from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class InvestmentService {
  annualData$$ = new Subject<InvestmentResult[]>();
  annualData$ = this.annualData$$.asObservable();

  calculate(data: InvestmentData) {
    const annualData: InvestmentResult[] = [];
    const {
      initialInvestment: initialInvestmentStr,
      duration: durationStr,
      annualInvestment: annualInvestmentStr,
      expectedReturn: expectedReturnStr
    } = data;

    const initialInvestment = +initialInvestmentStr;
    const duration = +durationStr;
    const annualInvestment = +annualInvestmentStr;
    const expectedReturn = +expectedReturnStr;
    let investmentValue = +initialInvestment;

    for (let i = 0; i < duration; i++) {
      const year = i + 1;
      const interestEarnedInYear = investmentValue * (expectedReturn / 100);
      investmentValue += interestEarnedInYear + annualInvestment;
      const totalInterest = investmentValue - annualInvestment * year - initialInvestment;
      annualData.push({
        year: year,
        interest: interestEarnedInYear,
        valueEndOfYear: investmentValue,
        annualInvestment: annualInvestment,
        totalInterest: totalInterest,
        totalAmountInvested: initialInvestment + annualInvestment * year,
      });
    }

    this.annualData$$.next(annualData);
  }
}
