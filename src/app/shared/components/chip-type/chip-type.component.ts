import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';

type ChipType = 'stock' | 'etf';

@Component({
  selector: 'chip-type',
  standalone: true,
  imports: [CommonModule, IonicModule],
  templateUrl: './chip-type.component.html',
  styleUrls: ['./chip-type.component.scss'],
})

export class ChipTypeComponent {
  @Input({ required: true }) chipType!: ChipType;

  // Format chip based on type
  colorFor(t: ChipType): string {
    switch (t) {
      case 'stock': return 'medium';   // grey
      case 'etf':   return 'primary';  // blue
    }
  }

  // Format label based on type 
  label(t: ChipType): string {
    return t === 'stock' ? 'Stock' : 'ETF';
  }
}