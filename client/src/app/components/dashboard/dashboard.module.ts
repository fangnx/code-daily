import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { HttpClientModule } from "@angular/common/http";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { AppRoutingModule } from "../../app-routing.module";

import { ClarityModule } from "@clr/angular";
import { FontAwesomeModule } from "@fortawesome/angular-fontawesome";
import { MarkdownModule } from "ngx-markdown";
import { TooltipModule } from "ng2-tooltip-directive";
import { tooltipOptions } from "../../utils/custom-tooltip";

import { UserService } from "../../services/user.service";
import { PocketService } from "../../services/pocket.service";
import { StackExchangeService } from "../../services/stackExchange.service";
import { ContentPanelService } from "../../services/contentPanel.service";

import { AppComponent } from "../../app.component";
import { LoginComponent } from "./user-management-panel/login/login.component";
import { QuestionCardComponent } from "../shared/question-card/question-card.component";
import { DashboardComponent } from "./dashboard.component";
import { ControlPanelComponent } from "./control-panel/control-panel.component";
import { NavigationPanelComponent } from "./navigation-panel/navigation-panel.component";
import { ContentPanelComponent } from "./content-panel/content-panel.component";
import { AnswerSectionComponent } from "../shared/answer-section/answer-section.component";
import { QuestionBadgeComponent } from "../shared/question-badge/question-badge.component";
import { UserManagementPanelComponent } from "./user-management-panel/user-management-panel.component";
import { RegistrationComponent } from "./user-management-panel/registration/registration.component";
import { QuestionContentComponent } from "../shared/question-content/question-content.component";
import { SettingCardComponent } from "../shared/setting-card/setting-card.component";
import { SubscriptionManagementComponent } from "./user-management-panel/subscription-management/subscription-management.component";
import { ContentHeaderComponent } from "./content-panel/content-header/content-header.component";
import { SimpleTagComponent } from "../shared/simple-tag/simple-tag.component";
import { DisplayBoardComponent } from "./user-management-panel/display-board/display-board.component";

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
    DisplayBoardComponent,
  ],
  imports: [
    ClarityModule,
    FontAwesomeModule,
    FormsModule,
    ReactiveFormsModule,
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    MarkdownModule.forRoot(),
    TooltipModule.forRoot(tooltipOptions),
  ],
  entryComponents: [AnswerSectionComponent],
  providers: [
    StackExchangeService,
    UserService,
    ContentPanelService,
    PocketService,
  ],
  bootstrap: [AppComponent],
})
export class DashboardModule {}
