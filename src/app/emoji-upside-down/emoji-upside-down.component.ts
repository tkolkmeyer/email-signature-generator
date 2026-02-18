import { Component, inject } from '@angular/core';
import { SignatureService } from '../signature.service';

@Component({
  selector: 'app-emoji-upside-down',
  standalone: true,
  templateUrl: './emoji-upside-down.component.html',
  styleUrls: ['./emoji-upside-down.component.css'],
})
export class EmojiUpsideDownComponent {
  private readonly signatures = [
    'Have a day,',
    'Sent from my LG Smart Washer,',
    'Damp regards,',
    'I just work here,',
    'Allegedly,',
    'Questionable regards,',
    'Sent from my Leapfrog Learning Pad,',
    'Hasta la pasta,',
    "Don't quote me on this,",
    'With plausible deniability,',
    'Technically speaking,',
    'Sent from a corn maze,',
    'This is fine,',
    'Asking for a friend,',
  ];

  private readonly signatureService = inject(SignatureService);
  private pool: number[] = [];

  get selectedSignature() {
    return this.signatureService.activeSource() === 'upside-down'
      ? this.signatureService.selectedSignature()
      : '';
  }

  pickSignature() {
    if (this.pool.length === 0) {
      this.pool = this.shuffle(this.signatures.map((_, i) => i));
    }
    this.signatureService.pick('upside-down', this.signatures[this.pool.pop()!]);
  }

  private shuffle(arr: number[]): number[] {
    for (let i = arr.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [arr[i], arr[j]] = [arr[j], arr[i]];
    }
    return arr;
  }
}
