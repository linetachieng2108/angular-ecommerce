import { Component, signal } from '@angular/core';

@Component({
  selector: 'app-header',
  imports: [],
  // template shows static data
  template: `
    <p>
      {{ title }}
    </p>
    <p>
      {{ head() }}
    </p>
  `,
  styles: ``
})

// Dynamic data is displayed here using signals
export class HeaderComponent {
  title ='My E-Commerce App';
  head = signal('Angular Ecommerce')
}
