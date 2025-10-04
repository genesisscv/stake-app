import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { IonicModule } from '@ionic/angular';
import { CommonModule } from '@angular/common';
import { ChipTypeComponent } from '../chip-type/chip-type.component';

@Component({
  selector: 'app-card',
  standalone: true,
  imports: [CommonModule, IonicModule, ChipTypeComponent],
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss'],
})
export class CardComponent {
  @Input() title?: string;
  @Input() subtitle?: string;
  @Input() footer?: string;
  @Input() padded = false;
  @Input() clickable = false;
  @Input() disabled = false;
  @Input() onClick?: () => void;
  @Input() chipType?: 'stock' | 'etf';
}