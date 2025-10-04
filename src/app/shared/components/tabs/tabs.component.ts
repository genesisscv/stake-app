import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { IonicModule } from '@ionic/angular';

type Tab = 'invest' | 'discover';

@Component({
  selector: 'tabs',
  imports: [CommonModule, IonicModule],
  standalone: true,
  templateUrl: './tabs.component.html',
  styleUrl: './tabs.component.scss'
})
export class TabsComponent {
  active: Tab = 'invest';
  setActive(t: Tab) { this.active = t; }
}
