import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { HttpClientModule } from "@angular/common/http";
import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { ClarityModule } from "@clr/angular";
import { NoopAnimationsModule } from "@angular/platform-browser/animations";
import { StoreModule } from "@ngrx/store";
import { EffectsModule } from "@ngrx/effects";
import { StoreDevtoolsModule } from "@ngrx/store-devtools";
import { appReducer } from "./state/app.reducer";
import { AppEffects } from "./state/app.effects";
import { QuestionCardComponent } from "./components/shared/question-card/question-card.component";
import { DashboardComponent } from "./components/dashboard/dashboard.component";
import { StackExchangeService } from "./services/stackExchange.service";
import { ControlPanelComponent } from "./components/dashboard/presentation-panel/control-panel/control-panel.component";
import { NavigationPanelComponent } from "./components/dashboard/navigation-panel/navigation-panel.component";
import { ContentPanelComponent } from "./components/dashboard/presentation-panel/content-panel/content-panel.component";
import { AnswerSectionComponent } from "./components/shared/answer-section/answer-section.component";
import { MarkdownModule } from "ngx-markdown";
import { ContentHeaderComponent } from "./components/dashboard/presentation-panel/content-panel/content-header/content-header.component";
import { QuestionBadgeComponent } from "./components/shared/question-badge/question-badge";
import { UserManagementPanelComponent } from "./components/dashboard/user-management-panel/user-management-panel.component";
import { RegistrationComponent } from "./components/dashboard/user-management-panel/registration/registration.component";
import { PresentationPanelComponent } from "./components/dashboard/presentation-panel/presentation-panel.component";

@NgModule({
  declarations: [
    AppComponent,
    QuestionCardComponent,
    DashboardComponent,
    ControlPanelComponent,
    NavigationPanelComponent,
    ContentPanelComponent,
    AnswerSectionComponent,
    ContentHeaderComponent,
    QuestionBadgeComponent,
    UserManagementPanelComponent,
    RegistrationComponent,
    PresentationPanelComponent,
  ],
  imports: [
    ClarityModule,
    StoreModule.forRoot({ app: appReducer }),
    EffectsModule.forRoot([AppEffects]),
    BrowserModule,
    AppRoutingModule,
    NoopAnimationsModule,
    HttpClientModule,
    StoreDevtoolsModule,
    MarkdownModule.forRoot(),
  ],
  entryComponents: [AnswerSectionComponent],
  providers: [StackExchangeService],
  bootstrap: [AppComponent],
})
export class AppModule {}
