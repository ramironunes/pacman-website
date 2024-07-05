/**
 * ===========================================================================
 * @Author: Ramiro Luiz Nunes
 * @Date:   2024-07-01 20:27:17
 * @Info:   A brief description of the file
 * ===========================================================================
 */

import { enableProdMode, ErrorHandler, importProvidersFrom } from '@angular/core';
import { bootstrapApplication } from '@angular/platform-browser';
import { AkitaNgDevtools } from '@datorama/akita-ngdevtools';
import * as Sentry from '@sentry/angular';
import { Integrations } from '@sentry/tracing';
import { AppComponent } from '@tetris-game/app.component';
import { environment } from './game/environments/environment';

const initSentry = () => {
  Sentry.init({
    dsn: 'https://91dfe2ed3a6c47f8a5a14188066cc9f2@o495789.ingest.sentry.io/5570178',
    autoSessionTracking: true,
    integrations: [
      new Integrations.BrowserTracing({
        tracingOrigins: ['localhost', 'https://tetris.trungk18.com'],
        routingInstrumentation: Sentry.routingInstrumentation
      })
    ],
    tracesSampleRate: 1.0
  });
};

if (environment.production) {
  enableProdMode();
  initSentry();
}

bootstrapApplication(AppComponent, {
  providers: [
    importProvidersFrom(AkitaNgDevtools.forRoot()),
    {
      provide: ErrorHandler,
      useValue: Sentry.createErrorHandler()
    }
  ]
});
