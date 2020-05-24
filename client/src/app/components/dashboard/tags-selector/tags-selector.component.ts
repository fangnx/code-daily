import {
  Component,
  Input,
  OnChanges,
  ChangeDetectionStrategy,
  Output,
  EventEmitter,
} from "@angular/core";
import { Tag } from "src/app/app.model";

@Component({
  selector: "tags-selector",
  templateUrl: "./tags-selector.component.html",
  styleUrls: ["./tags-selector.component.scss"],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TagsSelectorComponent implements OnChanges {
  @Input() tags: Tag;
  @Input() public selectedTags: Set<Tag>;
  @Output() public onTagSelected: EventEmitter<Tag> = new EventEmitter();
  @Output() public onTagUnselected: EventEmitter<Tag> = new EventEmitter();

  constructor() {}

  ngOnChanges() {
    // console.log(this.tags);
  }

  public isTagSelected(tag: Tag): boolean {
    return this.selectedTags.has(tag);
  }

  public getTagClass(tag: Tag): string {
    return this.isTagSelected(tag) ? "btn-primary" : "btn-outline";
  }

  public onSelectTag(tag: Tag): void {
    // if (!this.isTagSelected(tag)) {
    //   this.selectedTags.add(tag);
    //   this.onTagSelected.emit(tag);
    // } else {
    //   this.selectedTags.delete(tag);
    //   this.onTagUnselected.emit(tag);
    // }
  }
}
