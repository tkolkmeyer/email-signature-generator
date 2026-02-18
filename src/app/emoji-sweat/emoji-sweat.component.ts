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
    'Powered by caffeine and a dream,',
    'Sincerely confused,',
    'With ongoing regret,',
  ];

  private readonly signatureService = inject(SignatureService);

  get selectedSignature() {
    return this.signatureService.activeSource() === 'sweat'
      ? this.signatureService.selectedSignature()
      : '';
  }

  pickSignature() {
    const i = Math.floor(Math.random() * this.signatures.length);
    this.signatureService.pick('sweat', this.signatures[i]);
  }
}