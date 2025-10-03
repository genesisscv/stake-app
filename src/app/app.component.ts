import { Component } from '@angular/core';
import { IonicModule } from '@ionic/angular';
import { CommonModule } from '@angular/common';
import { CardComponent } from './shared/components/card/card.component';
import { Type } from './shared/components/type/type.enum';


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, IonicModule, CardComponent],
  templateUrl: './app.component.html'
})
export class AppComponent {
  name = 'Stake Challenge';
  handleClick() { console.log('Card clicked');
  // Type = Type;
 }
}