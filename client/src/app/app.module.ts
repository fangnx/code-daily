import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { ClarityModule } from "@clr/angular";
import { NoopAnimationsModule } from "@angular/platform-browser/animations";
import { QuestionCardComponent } from "./components/question-card/question-card.component";
import { NavigationBarComponent } from './components/navigation-bar/navigation-bar.component';

@NgModule({
  declarations: [AppComponent, QuestionCardComponent, NavigationBarComponent],
  imports: [
    ClarityModule,
    BrowserModule,
    AppRoutingModule,
    NoopAnimationsModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
