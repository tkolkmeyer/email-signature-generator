import { Component } from '@angular/core';

@Component({
  selector: 'app-emoji-nails',
  standalone: true,
  templateUrl: './emoji-nails.component.html',
  styleUrls: ['./emoji-nails.component.css'],
})
export class EmojiNailsComponent {
  private readonly signatures = [
    'With panache,',
    'Tata for now,',
    'Regards sold separately,',
    'XOXO gossip girl,',
    "I'm just a person,",
    'I have spoken,',
    'Peace out girl scout,',
    "I'm fine, it's fine, everything is fine,",
    'Another day another slay,',
    'I said what I said,',
  ];

  selectedSignature = '';

  pickSignature() {
    const i = Math.floor(Math.random() * this.signatures.length);
    this.selectedSignature = this.signatures[i];
  }
}