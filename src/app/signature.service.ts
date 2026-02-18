import { Injectable, signal } from '@angular/core';

@Injectable({ providedIn: 'root' })
export class SignatureService {
  readonly selectedSignature = signal('');
  readonly activeSource = signal('');

  pick(source: string, signature: string) {
    this.activeSource.set(source);
    this.selectedSignature.set(signature);
  }
}
