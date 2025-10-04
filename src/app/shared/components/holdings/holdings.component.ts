import { Component } from '@angular/core';
import { PortfolioData } from '../../../core/api/models/state/portfolio.data';
import { CommonModule } from '@angular/common';
import { InstrumentComponent } from '../instrument/instrument.component';

@Component({
  selector: 'holdings',
  imports: [CommonModule, InstrumentComponent ],
  standalone: true,
  templateUrl: './holdings.component.html',
  styleUrl: './holdings.component.scss'
})
export class HoldingsComponent {
  // Pull total equity + combined details straight from the portfolio layer
  totalEquity$ = this.portfolio.totalEquity$;
  instruments$ = this.portfolio.details$;

  constructor(private portfolio: PortfolioData) { }

}
