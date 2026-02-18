import { Component, inject } from '@angular/core';
import { SignatureService } from '../signature.service';

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
    'I have spoken,',
    'Peace out girl scout,',
    "I'm fine, it's fine, everything is fine,",
    'Another day another slay,',
    'I said what I said,',
    'With spite,',
    'Not taking questions at this time,',
    "You're welcome,",
  ];

  private readonly signatureService = inject(SignatureService);

  get selectedSignature() {
    return this.signatureService.activeSource() === 'nails'
      ? this.signatureService.selectedSignature()
      : '';
  }

  pickSignature() {
    const i = Math.floor(Math.random() * this.signatures.length);
    this.signatureService.pick('nails', this.signatures[i]);
  }
}