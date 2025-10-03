import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Type } from './type.enum';


@Component({
  selector: 'app-type',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './type.component.html',
  styleUrls: ['./type.component.scss'],

  // only updates if input/event changes to optimise performance
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class TypeComponent {
  @Input({ required: true }) type!: Type;
}
