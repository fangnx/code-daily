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
import { ControlPanelComponent } from "./components/dashboard/control-panel/control-panel.component";
import { UserPanelComponent } from "./components/dashboard/user-panel/user-panel.component";
import { ContentPanelComponent } from "./components/dashboard/content-panel/content-panel.component";
import { AnswerSectionComponent } from "./components/shared/answer-section/answer-section.component";

@NgModule({
  declarations: [
    AppComponent,
    QuestionCardComponent,
    DashboardComponent,
    ControlPanelComponent,
    UserPanelComponent,
    ContentPanelComponent,
    AnswerSectionComponent,
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
  ],
  providers: [StackExchangeService],
  bootstrap: [AppComponent],
})
export class AppModule {}
