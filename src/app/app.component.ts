import { Component } from '@angular/core';
import { HomeComponent } from './home/home.component';
import { EmojiSweatComponent } from './emoji-sweat/emoji-sweat.component';
import { EmojiNailsComponent } from './emoji-nails/emoji-nails.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [HomeComponent, EmojiSweatComponent, EmojiNailsComponent],
  template: `
    <main>
      <app-home></app-home>
      <app-emoji-sweat></app-emoji-sweat>
      <app-emoji-nails></app-emoji-nails>
    </main>
  `,
})
export class AppComponent {}
