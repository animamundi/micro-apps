import { OnDestroy } from '@angular/core';
import { Subject, Observable } from 'rxjs';
import { takeUntil } from 'rxjs/operators';

export class BaseComponent implements OnDestroy {
  protected get destroy$(): Subject<void> {
    if (!this._destroy$) {
      this._destroy$ = new Subject();
    }

    return this._destroy$;
  }

  private _destroy$?: Subject<void>;

  protected safeSubscribe<T>(observable: Observable<T>): Observable<T> {
    return observable.pipe(takeUntil(this.destroy$));
  }

  public ngOnDestroy(): void {
    if (this._destroy$) {
      this._destroy$.next();
      this._destroy$.complete();
    }
  }
}
