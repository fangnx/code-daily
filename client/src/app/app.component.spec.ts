import { HttpClientModule, HTTP_INTERCEPTORS } from "@angular/common/http";
import { APP_INITIALIZER } from "@angular/core";
import { TestBed, async } from "@angular/core/testing";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { BrowserModule } from "@angular/platform-browser";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { ClarityModule } from "@clr/angular";
import { FontAwesomeModule } from "@fortawesome/angular-fontawesome";
import { EffectsModule } from "@ngrx/effects";
import { Store, StoreModule } from "@ngrx/store";
import { StoreDevtoolsModule } from "@ngrx/store-devtools";
import { TooltipModule } from "ng2-tooltip-directive";
import { MarkdownModule } from "ngx-markdown";
import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { ContentHeaderComponent } from "./components/dashboard/content-panel/content-header/content-header.component";
import { ContentPanelComponent } from "./components/dashboard/content-panel/content-panel.component";
import { ControlPanelComponent } from "./components/dashboard/control-panel/control-panel.component";
import { DashboardComponent } from "./components/dashboard/dashboard.component";
import { NavigationPanelComponent } from "./components/dashboard/navigation-panel/navigation-panel.component";
import { DisplayBoardComponent } from "./components/dashboard/user-management-panel/display-board/display-board.component";
import { LoginComponent } from "./components/dashboard/user-management-panel/login/login.component";
import { RegistrationComponent } from "./components/dashboard/user-management-panel/registration/registration.component";
import { SubscriptionManagementComponent } from "./components/dashboard/user-management-panel/subscription-management/subscription-management.component";
import { UserManagementPanelComponent } from "./components/dashboard/user-management-panel/user-management-panel.component";
import { AnswerSectionComponent } from "./components/shared/answer-section/answer-section.component";
import { QuestionBadgeComponent } from "./components/shared/question-badge/question-badge.component";
import { QuestionCardComponent } from "./components/shared/question-card/question-card.component";
import { QuestionContentComponent } from "./components/shared/question-content/question-content.component";
import { SettingCardComponent } from "./components/shared/setting-card/setting-card.component";
import { SimpleTagComponent } from "./components/shared/simple-tag/simple-tag.component";
import { tooltipOptions } from "./utils/custom-tooltip";
import { ErrorInterceptor } from "./interceptors/error.interceptor";
import { ContentPanelService } from "./services/contentPanel.service";
import { PocketService } from "./services/pocket.service";
import { StackExchangeService } from "./services/stackExchange.service";
import { UserService } from "./services/user.service";
import { AppEffects } from "./state/app.effects";
import { appReducer, AppState } from "./state/app.reducer";
import { storageMetaReducer } from "./storage.metareducer";
import * as AppActions from "src/app/state/app.actions";

describe("AppComponent", () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
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
        StackExchangeService,
        UserService,
        ContentPanelService,
        PocketService,
        { provide: HTTP_INTERCEPTORS, useClass: ErrorInterceptor, multi: true },
      ],
    }).compileComponents();
  }));

  it("should create the app", () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  });

  it(`should have as title 'Code Daily'`, () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app.title).toEqual("Code Daily");
  });
});
