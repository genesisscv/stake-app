import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

type Type = 'stock' | 'etf';

@Component({
  selector: 'app-type',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './type.component.html',
  styleUrls: ['./type.component.scss'],

  // Only update if input/event changes to optimise performance
  changeDetection: ChangeDetectionStrategy.OnPush
})

export class TypeComponent {
  @Input({ required: true }) type!: Type;

  // Format chip based on type
  colorFor(t: Type): string {
    switch (t) {
      case 'stock': return 'medium';   // grey
      case 'etf':   return 'primary';  // blue
    }
  }

  // Format label based on type 
  label(t: Type): string {
    return t === 'stock' ? 'Stock' : 'ETF';
  }
}