import { Injectable } from '@angular/core';
import { analytics } from 'firebase/app';

import { Dictionary, AnalyticsEvent } from '../models';

@Injectable({
  providedIn: 'root',
})
export class AnalyticsService {
  private readonly analyticsInstance: analytics.Analytics;

  constructor() {
    this.analyticsInstance = analytics();
  }

  public setUserId(userId: string): void {
    this.analyticsInstance.setUserId(userId);
  }

  public setUserProperty(key: string, value: string): void {
    this.analyticsInstance.setUserProperties({
      [key]: value,
    });
  }

  public logEvent(
    eventName: AnalyticsEvent,
    params?: Dictionary<string>,
  ): void {
    this.analyticsInstance.logEvent(eventName, params);
  }
}
