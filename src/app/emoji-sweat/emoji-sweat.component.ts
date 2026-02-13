import { Component } from '@angular/core';

@Component({
  selector: 'app-emoji-sweat',
  standalone: true,
  template: `
    <button type="button" class="emoji-btn" (click)="pickSignature()">
      😅
    </button>

    @if (selectedSignature) {
      <div class="signature-preview">
        <div class="sig-line">{{ selectedSignature }}</div>
        <div class="sig-name">— Taylor</div>
      </div>
    }
  `,
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

  selectedSignature = '';

  pickSignature() {
    const i = Math.floor(Math.random() * this.signatures.length);
    this.selectedSignature = this.signatures[i];
  }
}