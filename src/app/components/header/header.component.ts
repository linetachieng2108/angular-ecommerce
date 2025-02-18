import { Component, signal } from '@angular/core';

@Component({
  selector: 'app-header',
  imports: [],
  // template shows static data
  template: `
    <!-- <p>
      {{ title }}
    </p> -->
    <div class="header">
      {{ head() }}
    </div>
  `,
  styles: `
  .header{
      background-color: #333;
      color: black;
      padding:1rem;
    }

    `,
})

// Dynamic data is displayed here using signals
export class HeaderComponent {
  title ='My E-Commerce App';
  head = signal('Angular Ecommerce')
}
