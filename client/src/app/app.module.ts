import { NgModule, APP_INITIALIZER } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { HttpClientModule, HTTP_INTERCEPTORS } from "@angular/common/http";
import { AppRoutingModule } from "./app-routing.module";

import { StoreModule, Store } from "@ngrx/store";
import { EffectsModule } from "@ngrx/effects";
import { StoreDevtoolsModule } from "@ngrx/store-devtools";
import { appReducer, AppState } from "./state/app.reducer";
import * as AppActions from "src/app/state/app.actions";
import { AppEffects } from "./state/app.effects";
import { storageMetaReducer } from "./storage.metareducer";

import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { ClarityModule } from "@clr/angular";
import { FontAwesomeModule } from "@fortawesome/angular-fontawesome";
import { TooltipModule } from "ng2-tooltip-directive";
import { tooltipOptions } from "./utils/custom-tooltip";
import { ErrorInterceptor } from "./interceptors/error.interceptor";

import { AppComponent } from "./app.component";
import { DashboardModule } from "./components/dashboard/dashboard.module";

@NgModule({
  declarations: [],
  imports: [
    ClarityModule,
    FontAwesomeModule,
    StoreModule.forRoot(
      { app: appReducer },
      { metaReducers: [storageMetaReducer] }
    ),
    EffectsModule.forRoot([AppEffects]),
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    StoreDevtoolsModule,
    TooltipModule.forRoot(tooltipOptions),
    BrowserAnimationsModule,

    DashboardModule,
  ],
  providers: [
    {
      provide: APP_INITIALIZER,
      useFactory: (store: Store<AppState>) => {
        return () => {
          store.dispatch(AppActions.fetchCurrentUser());
        };
      },
      multi: true,
      deps: [Store],
    },
    { provide: HTTP_INTERCEPTORS, useClass: ErrorInterceptor, multi: true },
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
