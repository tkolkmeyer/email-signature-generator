import { Component, inject } from '@angular/core';
import { HomeComponent } from './home/home.component';
import { EmojiSweatComponent } from './emoji-sweat/emoji-sweat.component';
import { EmojiNailsComponent } from './emoji-nails/emoji-nails.component';
import { EmojiUpsideDownComponent } from './emoji-upside-down/emoji-upside-down.component';
import { EmojiStrongComponent } from './emoji-strong/emoji-strong.component';
import { SignatureService } from './signature.service';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [HomeComponent, EmojiSweatComponent, EmojiNailsComponent, EmojiUpsideDownComponent, EmojiStrongComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  readonly signatureService = inject(SignatureService);
}
