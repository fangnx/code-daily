import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { HttpClientModule, HTTP_INTERCEPTORS } from "@angular/common/http";
import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { StoreModule, ActionReducer, MetaReducer } from "@ngrx/store";
import { EffectsModule } from "@ngrx/effects";
import { StoreDevtoolsModule } from "@ngrx/store-devtools";
import { appReducer } from "./state/app.reducer";
import { AppEffects } from "./state/app.effects";
import { localStorageSync } from "ngrx-store-localstorage";

import { QuestionCardComponent } from "./components/shared/question-card/question-card.component";
import { DashboardComponent } from "./components/dashboard/dashboard.component";
import { StackExchangeService } from "./services/stackExchange.service";
import { ControlPanelComponent } from "./components/dashboard/control-panel/control-panel.component";
import { NavigationPanelComponent } from "./components/dashboard/navigation-panel/navigation-panel.component";
import { ContentPanelComponent } from "./components/dashboard/content-panel/content-panel.component";
import { AnswerSectionComponent } from "./components/shared/answer-section/answer-section.component";
import { QuestionBadgeComponent } from "./components/shared/question-badge/question-badge";
import { UserManagementPanelComponent } from "./components/dashboard/user-management-panel/user-management-panel.component";
import { RegistrationComponent } from "./components/dashboard/user-management-panel/registration/registration.component";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { NoopAnimationsModule } from "@angular/platform-browser/animations";
import { UserService } from "./services/user.service";
import { LoginComponent } from "./components/dashboard/user-management-panel/login/login.component";
import { ErrorInterceptor } from "./interceptors/error.interceptor";

import { ClarityModule } from "@clr/angular";
import { MarkdownModule } from "ngx-markdown";
import { storageMetaReducer } from "./storage.metareducer";

// export function localStorageSyncReducer(
//   reducer: ActionReducer<any>
// ): ActionReducer<any> {
//   return localStorageSync({ keys: [{ app: ["user"] }], rehydrate: false })(
//     reducer
//   );
// }

const metaReducers: Array<MetaReducer<any, any>> = [storageMetaReducer];
console.log(metaReducers);

@NgModule({
  declarations: [
    AppComponent,
    QuestionCardComponent,
    DashboardComponent,
    ControlPanelComponent,
    NavigationPanelComponent,
    ContentPanelComponent,
    AnswerSectionComponent,
    QuestionBadgeComponent,
    UserManagementPanelComponent,
    RegistrationComponent,
    LoginComponent,
  ],
  imports: [
    ClarityModule,
    StoreModule.forRoot({ app: appReducer }, { metaReducers }),
    EffectsModule.forRoot([AppEffects]),
    NoopAnimationsModule,
    FormsModule,
    ReactiveFormsModule,
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    StoreDevtoolsModule,
    MarkdownModule.forRoot(),
  ],
  entryComponents: [AnswerSectionComponent],
  providers: [
    StackExchangeService,
    UserService,
    { provide: HTTP_INTERCEPTORS, useClass: ErrorInterceptor, multi: true },
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
