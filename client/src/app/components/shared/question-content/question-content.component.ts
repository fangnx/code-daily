import {
  Component,
  OnInit,
  ChangeDetectionStrategy,
  Input,
  AfterViewInit,
} from "@angular/core";
import { MarkdownService } from "ngx-markdown";
import { parseHtmlEntities } from "src/app/utils/helpers";

@Component({
  selector: "question-content",
  templateUrl: "./question-content.component.html",
  styleUrls: ["./question-content.component.scss"],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class QuestionContentComponent implements OnInit, AfterViewInit {
  @Input() language?: string;
  @Input() contentRawHtml: string;
  @Input() contentRawMarkdown: string;

  constructor(private markdownService: MarkdownService) {}

  ngOnInit(): void {
    // Customize markdown rendering.
    this.markdownService.renderer.code = (code: string) => {
      const unescapedText = parseHtmlEntities(code);
      return `<div class="expandable-code">Toggle Code Block 💻</div>
      <pre class="${this.languageName} language-none panel"><code class="${this.languageName} language-none">${unescapedText}</code></pre>`;
    };

    this.markdownService.renderer.image = (image: string) => {
      return `<img loading="lazy" src=${image}></img>`;
    };
  }

  ngAfterViewInit(): void {
    // Handle expandable code widgets.
    const acc = document.getElementsByClassName("expandable-code");

    for (let i = 0; i < acc.length; i++) {
      acc[i].addEventListener("click", function () {
        this.classList.toggle("active");

        const panel = this.nextElementSibling;
        if (panel.style.display === "block") {
          panel.style.display = "none";
        } else {
          panel.style.display = "block";
        }
      });
    }
  }

  private get languageName(): string {
    return this.language ? `language-${this.language}` : "";
  }
}
