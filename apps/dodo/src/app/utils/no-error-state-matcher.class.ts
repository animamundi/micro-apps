import { ErrorStateMatcher } from '@angular/material';

export class NoErrorStateMatcher implements ErrorStateMatcher {
  public isErrorState(): boolean {
    return false;
  }
}
