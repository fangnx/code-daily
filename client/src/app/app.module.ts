import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { HttpClientModule } from "@angular/common/http";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { ClarityModule } from "@clr/angular";
import { NoopAnimationsModule } from "@angular/platform-browser/animations";
import { QuestionCardComponent } from "./components/shared/question-card/question-card.component";
import { NavigationBarComponent } from "./components/navigation-bar/navigation-bar.component";
import { DashboardComponent } from "./components/dashboard/dashboard.component";
import { StackExchangeService } from "./services/stackExchange.service";
import { QuestionCardBoardComponent } from "./components/dashboard/question-card-board/question-card-board.component";
import { TagsSelectorComponent } from './components/dashboard/tags-selector/tags-selector.component';

@NgModule({
  declarations: [
    AppComponent,
    QuestionCardComponent,
    NavigationBarComponent,
    DashboardComponent,
    QuestionCardBoardComponent,
    TagsSelectorComponent,
  ],
  imports: [
    ClarityModule,
    BrowserModule,
    AppRoutingModule,
    NoopAnimationsModule,
    HttpClientModule,
  ],
  providers: [StackExchangeService],
  bootstrap: [AppComponent],
})
export class AppModule {}
