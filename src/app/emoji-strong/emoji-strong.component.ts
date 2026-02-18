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
  ];

  private readonly signatureService = inject(SignatureService);

  get selectedSignature() {
    return this.signatureService.activeSource() === 'strong'
      ? this.signatureService.selectedSignature()
      : '';
  }

  pickSignature() {
    const i = Math.floor(Math.random() * this.signatures.length);
    this.signatureService.pick('strong', this.signatures[i]);
  }
}
