import { Component, inject } from '@angular/core';
import { SignatureService } from '../signature.service';

@Component({
  selector: 'app-emoji-strong',
  standalone: true,
  templateUrl: './emoji-strong.component.html',
  styleUrls: ['./emoji-strong.component.css'],
})
export class EmojiStrongComponent {
  private readonly signatures = [
    'We ride at dawn,',
    'Powered by Diet Coke,',
    'Fueled by spite,',
    'No days off,',
    'Eyes on the prize,',
    'Godspeed,',
    'Stay dangerous,',
    'On to the next one,',
    'We move,',
    'Onward and upward,',
    'Do it scared,',
    'Relentlessly,',
    "Let's get it,",
  ];

  private readonly signatureService = inject(SignatureService);
  private pool: number[] = [];

  get selectedSignature() {
    return this.signatureService.activeSource() === 'strong'
      ? this.signatureService.selectedSignature()
      : '';
  }

  pickSignature() {
    if (this.pool.length === 0) {
      this.pool = this.shuffle(this.signatures.map((_, i) => i));
    }
    this.signatureService.pick('strong', this.signatures[this.pool.pop()!]);
  }

  private shuffle(arr: number[]): number[] {
    for (let i = arr.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [arr[i], arr[j]] = [arr[j], arr[i]];
    }
    return arr;
  }
}
