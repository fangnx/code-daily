import {
  Component,
  Input,
  ChangeDetectionStrategy,
  ViewChild,
  OnInit,
  OnDestroy,
  ChangeDetectorRef,
} from "@angular/core";
import { UserAuth } from "src/app/models/user.model";
import { Router } from "@angular/router";
import { Store } from "@ngrx/store";
import { AppState } from "src/app/state/app.reducer";
import * as AppActions from "src/app/state/app.actions";
import {
  faFireAlt,
  faRedoAlt,
  faBars,
  faCaretSquareLeft,
  faCaretSquareRight,
} from "@fortawesome/free-solid-svg-icons";

@Component({
  selector: "content-header",
  templateUrl: "./content-header.component.html",
  styleUrls: ["./content-header.component.scss"],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ContentHeaderComponent implements OnInit, OnDestroy {
  @ViewChild("dropdown", { static: false }) menuElement;

  @Input() public userAuth?: UserAuth;
  @Input() public tag: string;
  @Input() public page: number;
  @Input() public userFavoriteTags: Array<string>;
  @Input() public userSubscribedTags: Array<string>;

  public dropdownIcon = faBars;
  public trendingIcon = faFireAlt;
  public randomIcon = faRedoAlt;
  public arrowLeftIcon = faCaretSquareLeft;
  public arrowRightIcon = faCaretSquareRight;

  public isMenuExpanded: boolean;
  public menuSelectedOption: string;

  constructor(
    private router: Router,
    private store: Store<AppState>,
    private ref: ChangeDetectorRef
  ) {}

  public ngOnInit() {
    this.menuSelectedOption = "default";

    this.onDocumentClicked = this.onDocumentClicked.bind(this);
    document.addEventListener("click", this.onDocumentClicked);
  }

  public ngOnDestroy() {
    document.removeEventListener("click", this.onDocumentClicked);
  }

  private onDocumentClicked(event: MouseEvent): void {
    if (this.menuElement.nativeElement.contains(event.target)) {
      return;
    }
    this.isMenuExpanded = false;
    this.ref.markForCheck();
  }

  public get title(): string {
    return this.tag;
  }

  private isTagFavoriteByUser(tag: string): boolean {
    return this.userFavoriteTags && this.userFavoriteTags.indexOf(tag) >= 0;
  }

  private isTagSubscribedByUser(tag: string): boolean {
    return this.userSubscribedTags && this.userSubscribedTags.indexOf(tag) >= 0;
  }

  public getStarIconClass(): string {
    return this.isTagFavoriteByUser(this.tag) ? "is-solid" : "";
  }

  public getEmailIconClass(): string {
    return this.isTagSubscribedByUser(this.tag) ? "is-solid" : "";
  }

  public onPaginationClicked(goNext?: boolean): void {
    this.page += goNext ? 1 : -1;
    this.store.dispatch(AppActions.setPage({ page: this.page }));
  }

  public onStarClicked(): void {
    if (!this.hasUserLoggedIn) {
      this.router.navigate(["/user/login"]);
      return;
    }

    if (this.isTagFavoriteByUser(this.tag)) {
      this.store.dispatch(
        AppActions.removeFavoriteTagFromUser({ tag: this.tag })
      );
    } else {
      this.store.dispatch(AppActions.addFavoriteTagToUser({ tag: this.tag }));
    }
  }

  public onDropdownIconClicked(): void {
    this.isMenuExpanded = !this.isMenuExpanded;
  }

  public onDropdownOptionClicked(mode: string) {
    if (mode === "random") {
      this.menuSelectedOption = "random";
      this.store.dispatch(
        AppActions.fetchQuestions({ tag: this.tag, fetchRandom: true })
      );
    } else {
      this.menuSelectedOption = "default";
      this.store.dispatch(AppActions.fetchQuestions({ tag: this.tag }));
    }
  }

  private get hasUserLoggedIn(): boolean {
    return !!this.userAuth && !!this.userAuth.email;
  }

  public get arrowLeftClass(): string {
    return this.page <= 1 ? "disabled" : "";
  }

  // TODO: change this.
  // Note: this is a temporary solution, since Stack Exchange API does not give total number of items/pages.
  public get arrowRightClass(): string {
    return this.page >= 8 ? "disabled" : "";
  }

  public get dropdownClass(): string {
    return this.isMenuExpanded ? "open" : "";
  }

  public dropdownOptionClass(option): string {
    return this.isOptionSelected(option) ? "selected" : "";
  }

  private isOptionSelected(option: string): boolean {
    return this.menuSelectedOption === option;
  }
}
