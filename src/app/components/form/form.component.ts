import { Component } from '@angular/core';
import { FormsModule } from "@angular/forms";
import { InvestmentService } from "../../services/investment.service";
import { InvestmentData } from "../../types/investment-data";

@Component({
  selector: 'app-form',
  standalone: true,
  imports: [
    FormsModule
  ],
  templateUrl: './form.component.html',
  styleUrl: './form.component.css'
})
export class FormComponent {
  investmentData: InvestmentData = {
    initialInvestment: '0',
    annualInvestment: '0',
    expectedReturn: '5',
    duration: '10'
  }

  constructor(private investmentService: InvestmentService) {}

  onSubmit() {
    this.investmentService.calculate(this.investmentData);

    this.investmentData = {
      initialInvestment: '0',
      annualInvestment: '0',
      expectedReturn: '5',
      duration: '10'
    }
  }
}
