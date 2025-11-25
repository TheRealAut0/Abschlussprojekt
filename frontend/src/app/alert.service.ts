import { Injectable } from '@angular/core';
import { BehaviorSubject, interval, Subscription } from 'rxjs';
import { takeWhile } from 'rxjs/operators';

export interface Alert {
  type: 'success' | 'error' | 'info' | 'warning';
  message: string;
}

@Injectable({
  providedIn: 'root',
})
export class AlertService {
  private alertSubject = new BehaviorSubject<Alert | null>(null);
  alert$ = this.alertSubject.asObservable();

  private progressSubject = new BehaviorSubject<number>(100);
  progress$ = this.progressSubject.asObservable();

  private timerSubscription: Subscription | null = null;

  showAlert(type: Alert['type'], message: string) {
    this.alertSubject.next({ type, message });
    this.startProgressBar();
  }

  private startProgressBar() {
    const duration = 5000; // 5 Sekunden
    const intervalTime = 100; // Alle 100ms aktualisieren
    let elapsed = 0;

    this.progressSubject.next(100); // Reset progress

    if (this.timerSubscription) {
      this.timerSubscription.unsubscribe();
    }

    this.timerSubscription = interval(intervalTime)
      .pipe(takeWhile(() => elapsed < duration))
      .subscribe(() => {
        elapsed += intervalTime;
        const progress = 100 - (elapsed / duration) * 100;
        this.progressSubject.next(progress);

        if (elapsed >= duration) {
          this.clearAlert();
        }
      });
  }

  clearAlert() {
    this.alertSubject.next(null);
    this.progressSubject.next(0);
    if (this.timerSubscription) {
      this.timerSubscription.unsubscribe();
    }
  }
}
