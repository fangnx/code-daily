import { NgModule, APP_INITIALIZER } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { HttpClientModule, HTTP_INTERCEPTORS } from "@angular/common/http";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { AppRoutingModule } from "./app-routing.module";

// State management.
import { StoreModule, Store } from "@ngrx/store";
import { EffectsModule } from "@ngrx/effects";
import { StoreDevtoolsModule } from "@ngrx/store-devtools";
import { appReducer, AppState } from "./state/app.reducer";
import * as AppActions from "src/app/state/app.actions";
import { AppEffects } from "./state/app.effects";
import { storageMetaReducer } from "./storage.metareducer";

// UI libraries.
import { ClarityModule } from "@clr/angular";
import { FontAwesomeModule } from "@fortawesome/angular-fontawesome";
import { MarkdownModule } from "ngx-markdown";
import { TooltipModule, TooltipOptions } from "ng2-tooltip-directive";

import { UserService } from "./services/user.service";
import { PocketService } from "./services/pocket.service";
import { ErrorInterceptor } from "./interceptors/error.interceptor";

import { AppComponent } from "./app.component";
import { LoginComponent } from "./components/dashboard/user-management-panel/login/login.component";
import { QuestionCardComponent } from "./components/shared/question-card/question-card.component";
import { DashboardComponent } from "./components/dashboard/dashboard.component";
import { StackExchangeService } from "./services/stackExchange.service";
import { ControlPanelComponent } from "./components/dashboard/control-panel/control-panel.component";
import { NavigationPanelComponent } from "./components/dashboard/navigation-panel/navigation-panel.component";
import { ContentPanelComponent } from "./components/dashboard/content-panel/content-panel.component";
import { AnswerSectionComponent } from "./components/shared/answer-section/answer-section.component";
import { QuestionBadgeComponent } from "./components/shared/question-badge/question-badge.component";
import { UserManagementPanelComponent } from "./components/dashboard/user-management-panel/user-management-panel.component";
import { RegistrationComponent } from "./components/dashboard/user-management-panel/registration/registration.component";
import { QuestionContentComponent } from "./components/shared/question-content/question-content.component";
import { SettingCardComponent } from "./components/shared/setting-card/setting-card.component";
import { ContentPanelService } from "./services/contentPanel.service";
import { SubscriptionManagementComponent } from "./components/dashboard/user-management-panel/subscription-management/subscription-management.component";
import { ContentHeaderComponent } from "./components/dashboard/content-panel/content-header/content-header.component";
import { SimpleTagComponent } from "./components/shared/simple-tag/simple-tag.component";
import { tooltipOptions } from "./custom-tooltip";

@NgModule({
  declarations: [
    AppComponent,
    QuestionCardComponent,
    DashboardComponent,
    ControlPanelComponent,
    NavigationPanelComponent,
    ContentPanelComponent,
    ContentHeaderComponent,
    AnswerSectionComponent,
    QuestionBadgeComponent,
    UserManagementPanelComponent,
    RegistrationComponent,
    LoginComponent,
    QuestionContentComponent,
    SettingCardComponent,
    SubscriptionManagementComponent,
    SimpleTagComponent,
  ],
  imports: [
    ClarityModule,
    FontAwesomeModule,
    StoreModule.forRoot(
      { app: appReducer },
      { metaReducers: [storageMetaReducer] }
    ),
    EffectsModule.forRoot([AppEffects]),
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule,
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    StoreDevtoolsModule,
    MarkdownModule.forRoot(),
    TooltipModule.forRoot(tooltipOptions),
  ],
  entryComponents: [AnswerSectionComponent],
  providers: [
    {
      provide: APP_INITIALIZER,
      useFactory: (store: Store<AppState>) => {
        return () => {
          store.dispatch(AppActions.fetchCurrentUser());
          store.dispatch(AppActions.selectTag({ tag: "java" }));
        };
      },
      multi: true,
      deps: [Store],
    },
    StackExchangeService,
    UserService,
    ContentPanelService,
    PocketService,
    { provide: HTTP_INTERCEPTORS, useClass: ErrorInterceptor, multi: true },
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
