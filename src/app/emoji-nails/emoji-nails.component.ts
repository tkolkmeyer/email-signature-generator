import { Component } from '@angular/core';

@Component({
  selector: 'app-emoji-nails',
  standalone: true,
  templateUrl: './emoji-nails.component.html',
  styleUrls: ['./emoji-nails.component.css'],
})
export class EmojiNailsComponent {
  private readonly signatures = [
    'with panache,',
    'tata for now,',
    'regards sold separately,',
    'XOXO gossip girl,',
    "i'm just a person,",
    'I have spoken,',
    'peace out girl scout,',
    "i'm fine, it's fine, everything is fine,",
    'another day another slay,',
    'I said what I said,',
  ];

  selectedSignature = '';

  pickSignature() {
    const i = Math.floor(Math.random() * this.signatures.length);
    this.selectedSignature = this.signatures[i];
  }
}