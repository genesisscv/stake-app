import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { IonicModule } from '@ionic/angular';

@Component({
  selector: 'instrument',
  standalone: true,
  imports: [CommonModule, IonicModule],
  templateUrl: './instrument.component.html',
  styleUrl: './instrument.component.scss'
})
export class InstrumentComponent {

  // Fed from portfolio data
  @Input() symbol!: string;      // e.g. "AAPL"
  @Input() shares!: number;      // e.g. 3.0282
  @Input() price!: number;       // e.g. 105.44
  @Input() performance!: number;

  // Format shares for display
  get sharesText() {
    return `${this.shares?.toFixed(4)} shares`;
  }

  // Format price with a $ sign and two decimals
  get priceDisplay(): string {
    if (this.price == null || isNaN(this.price)) return '';
    return `$${this.price.toLocaleString('en-US', {
      minimumFractionDigits: 2,
      maximumFractionDigits: 2,
    })}`;
  }

  // Format performance for display (+green / −red)
  get performanceDisplay() {
    if (this.performance == null || isNaN(this.performance)) {
      return { text: '', variant: '' as const };
    }

    const val = Number(this.performance);
    const isPositive = val > 0;
    const isNegative = val < 0;

    const sign = isPositive ? '+' : isNegative ? '−' : '';
    const text = `${sign}${Math.abs(val).toFixed(2)}%`;

    return {
      text,
      variant: isPositive
        ? ('green' as const)
        : isNegative
          ? ('red' as const)
          : ('' as const)
    };
  }
}