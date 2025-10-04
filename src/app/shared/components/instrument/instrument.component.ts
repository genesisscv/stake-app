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
  @Input() name!: string;      // e.g. "AAPL"
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
  // Format performance for display (currently supports 'green', easily extendable)
  get performanceDisplay() {
    // nothing to show
    if (this.performance == null) return { text: '', variant: '' as const };

    const value = Math.abs(this.performance).toFixed(2);
    const sign = this.performance > 0 ? '+' : '';

    // show +2.35% or -1.20%
    return {
      text: `${sign}${value}%`,
      variant: this.performance > 0 ? 'green' as const : '' as const
    };
  }


}