import { Component } from '@angular/core';
import { HomeComponent } from "./home/home.component";

@Component({
  selector: 'app-root',
  imports: [HomeComponent],
  template: `
    <main>
      <header class="brand-name">
        <img class="brand-logo" src="/email-signature-generator-logo.png" alt ="logo" aria-hidden="true">
      </header>
      <section class="content">
        <app-home></app-home>
</br>

      </section>
    </main>
    
  `,
  styles: [],
})
export class AppComponent {
  title = 'email-signature-generator';
}
