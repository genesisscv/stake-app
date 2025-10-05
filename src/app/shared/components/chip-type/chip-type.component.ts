import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { IonicModule } from '@ionic/angular';

export enum ChipType {
  STOCK = 'Stock',
  ETF = 'ETF'
}

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
      case ChipType.STOCK: return 'medium';   // grey
      case ChipType. ETF: return 'primary';  // blue
    }
  }

}