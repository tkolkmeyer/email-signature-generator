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
    'Sent from my LG smart washer,',
    'Damp regards,',
    'I just work here,',
    'Allegedly,',
    'Questionable regards,',
    'Sent from my Leapfrog Learning Pad,',
    'Hasta la pasta,',
    "Don't quote me on this,",
  ];

  private readonly signatureService = inject(SignatureService);

  get selectedSignature() {
    return this.signatureService.activeSource() === 'upside-down'
      ? this.signatureService.selectedSignature()
      : '';
  }

  pickSignature() {
    const i = Math.floor(Math.random() * this.signatures.length);
    this.signatureService.pick('upside-down', this.signatures[i]);
  }
}
