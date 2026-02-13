import { Component } from '@angular/core';
import { HomeComponent } from './home/home.component';
import { EmojiSweatComponent } from './emoji-sweat/emoji-sweat.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [HomeComponent, EmojiSweatComponent],
  template: `
    <main>
      <app-home></app-home>
      <app-emoji-sweat></app-emoji-sweat>
    </main>
  `,
})
export class AppComponent {}
