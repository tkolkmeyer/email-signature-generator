import { Component, inject } from '@angular/core';
import { SignatureService } from '../signature.service';

@Component({
  selector: 'app-emoji-sweat',
  standalone: true,
  templateUrl: './emoji-sweat.component.html',
  styleUrls: ['./emoji-sweat.component.css'],
})
export class EmojiSweatComponent {
  private readonly signatures = [
    'On my tippy toes,',
    'Searching for my marbles,',
    'Per my last brain cell,',
    'With green eggs and ham,',
    'Sincerely confused,',
    'With ongoing regret,',
    'All panic, no disco,',
    'All blues, no clues,',
    "I'm just a person,",
    'Sent from the floor,',
    'In shambles,',
    'Send help,',
  ];

  private readonly signatureService = inject(SignatureService);
  private pool: number[] = [];

  get selectedSignature() {
    return this.signatureService.activeSource() === 'sweat'
      ? this.signatureService.selectedSignature()
      : '';
  }

  pickSignature() {
    if (this.pool.length === 0) {
      this.pool = this.shuffle(this.signatures.map((_, i) => i));
    }
    this.signatureService.pick('sweat', this.signatures[this.pool.pop()!]);
  }

  private shuffle(arr: number[]): number[] {
    for (let i = arr.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [arr[i], arr[j]] = [arr[j], arr[i]];
    }
    return arr;
  }
}