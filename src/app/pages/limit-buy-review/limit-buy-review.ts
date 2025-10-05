import { Component } from '@angular/core';
import { CardComponent } from '../../shared/components/card/card.component';
import { IonicModule } from '@ionic/angular';
import { InstrumentComponent } from '../../shared/components/instrument/instrument.component';
import { HoldingsComponent } from '../../shared/components/holdings/holdings.component';
import { ChipType } from '../../shared/components/chip-type/chip-type.component';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'limit-buy-review',
  imports: [
    CommonModule,
    IonicModule,
    CardComponent,
    InstrumentComponent,
    HoldingsComponent],
  templateUrl: './limit-buy-review.html',
  styleUrl: './limit-buy-review.scss'
})
export class LimitBuyReview {
  ChipType = ChipType;

  // Mock trending data, to be replaced in the future
  trending = Array.from({ length: 20 }, () => ({
    ticker: 'FIG',
    name: 'Figma Inc',
    price: 131.04,
    type: ChipType.STOCK,
    logo: 'assets/logos/figma.svg',
  }));

}