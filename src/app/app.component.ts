import { Component, inject } from '@angular/core';
import { HomeComponent } from './home/home.component';
import { EmojiSweatComponent } from './emoji-sweat/emoji-sweat.component';
import { EmojiNailsComponent } from './emoji-nails/emoji-nails.component';
import { SignatureService } from './signature.service';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [HomeComponent, EmojiSweatComponent, EmojiNailsComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  readonly signatureService = inject(SignatureService);
}
