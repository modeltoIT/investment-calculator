import { Component, OnInit } from '@angular/core';
import { InvestmentService } from "../../services/investment.service";
import { InvestmentResult } from "../../types/investment-result";
import { CurrencyPipe } from "@angular/common";

@Component({
  selector: 'app-table',
  standalone: true,
  imports: [
    CurrencyPipe
  ],
  templateUrl: './table.component.html',
  styleUrl: './table.component.css'
})
export class TableComponent implements OnInit{
  annualData: InvestmentResult[] = [];

  constructor(private investmentService: InvestmentService) {}

  ngOnInit() {
    this.investmentService.annualData$.subscribe({
      next: (result) => this.annualData = result
    });
  }
}
