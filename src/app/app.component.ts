import { Component } from '@angular/core';
import { IonicModule } from '@ionic/angular';
import { CommonModule } from '@angular/common';
import { LimitBuyReview } from './pages/limit-buy-review/limit-buy-review';
import { TabsComponent } from './shared/components/tabs/tabs.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, IonicModule, LimitBuyReview, TabsComponent],
  templateUrl: './app.component.html'
})
export class AppComponent {
}