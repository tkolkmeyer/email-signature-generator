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
  private pool: number[] = [];

  get selectedSignature() {
    return this.signatureService.activeSource() === 'nails'
      ? this.signatureService.selectedSignature()
      : '';
  }

  pickSignature() {
    if (this.pool.length === 0) {
      this.pool = this.shuffle(this.signatures.map((_, i) => i));
    }
    this.signatureService.pick('nails', this.signatures[this.pool.pop()!]);
  }

  private shuffle(arr: number[]): number[] {
    for (let i = arr.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [arr[i], arr[j]] = [arr[j], arr[i]];
    }
    return arr;
  }
}