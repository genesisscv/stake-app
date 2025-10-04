import { Component } from '@angular/core';
import { CardComponent } from '../../shared/components/card/card.component';
import { IonicModule } from '@ionic/angular';
import { InstrumentComponent } from '../../shared/components/instrument/instrument.component';
import { HoldingsComponent } from '../../shared/components/holdings/holdings.component';

@Component({
  selector: 'limit-buy-review',
  imports: [IonicModule, CardComponent, InstrumentComponent, HoldingsComponent],
  templateUrl: './limit-buy-review.html',
  styleUrl: './limit-buy-review.scss'
})
export class LimitBuyReview {

}
