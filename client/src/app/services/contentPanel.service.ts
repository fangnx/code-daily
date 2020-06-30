import { Injectable } from "@angular/core";
import { BehaviorSubject, Observable } from "rxjs";

@Injectable()
export class ContentPanelService {
  private isContentPanelReady: BehaviorSubject<boolean> = new BehaviorSubject(
    false
  );

  public get isContentPanelReady$(): Observable<boolean> {
    return this.isContentPanelReady.asObservable();
  }

  public setReadyState(isReady: boolean): void {
    this.isContentPanelReady.next(isReady);
  }
}
