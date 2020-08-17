import {
  Component,
  OnInit,
  ChangeDetectionStrategy,
  Input,
} from "@angular/core";
import { MarkdownService } from "ngx-markdown";
import { parseHtmlEntities } from "src/app/helpers";

@Component({
  selector: "question-content",
  templateUrl: "./question-content.component.html",
  styleUrls: ["./question-content.component.scss"],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class QuestionContentComponent implements OnInit {
  @Input() language?: string;
  @Input() contentRawHtml: string;
  @Input() contentRawMarkdown: string;

  constructor(private markdownService: MarkdownService) {}

  ngOnInit() {
    this.markdownService.renderer.code = (code: string) => {
      const unescapedText = parseHtmlEntities(code);
      return `<pre class="${this.languageName} language-none"><code class="${this.languageName} language-none">${unescapedText}</code></pre>`;
    };
  }

  private get languageName() {
    return this.language ? `language-${this.language}` : "";
  }
}
