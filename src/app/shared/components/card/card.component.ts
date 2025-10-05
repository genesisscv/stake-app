import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { IonicModule } from '@ionic/angular';
import { CommonModule } from '@angular/common';
import { ChipType, ChipTypeComponent } from '../chip-type/chip-type.component';

@Component({
  selector: 'card',
  standalone: true,
  imports: [CommonModule, IonicModule, ChipTypeComponent],
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})

export class CardComponent {
  @Input() title?: string;
  @Input() subtitle?: string;
  @Input() padded = false;
  @Input() clickable = false;
  @Input() disabled = false;
  @Input() onClick?: () => void;
  @Input() chipType?: ChipType;
  @Input() imgSrc?: string;
  @Input() price?: number;

  // Format price
  get priceDisplay(): string {
    if (this.price == null || isNaN(this.price)) return '';
    return `$${this.price.toLocaleString('en-US', {
      minimumFractionDigits: 2,
      maximumFractionDigits: 2,
    })}`;
  }
}