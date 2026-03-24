// Paste any component here — Angular, React, PrimeNG, Material, Flowbite, Tailwind...
// Example: PrimeNG Button (Angular)

import { Component, Input } from '@angular/core';
import { ButtonModule } from 'primeng/button';

@Component({
  selector: 'app-action-button',
  standalone: true,
  imports: [ButtonModule],
  template: `
    <p-button
      [label]="label"
      [severity]="severity"
      [disabled]="disabled"
      [loading]="loading"
      (onClick)="onClick.emit($event)"
    />
  `
})
export class ActionButtonComponent {
  @Input() label = 'Click me';
  @Input() severity: 'primary' | 'secondary' | 'danger' = 'primary';
  @Input() disabled = false;
  @Input() loading = false;
}