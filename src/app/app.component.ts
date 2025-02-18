import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from './components/header/header.component';
@Component({
  selector: 'app-root',
  imports: [RouterOutlet, HeaderComponent],
  template: `
  <!-- To show the component on the UI -->
    <app-header/>
    <router-outlet />
  `,
  styles: `
    
  `,
})
export class AppComponent {
  title = 'angular-ecomm';
}
