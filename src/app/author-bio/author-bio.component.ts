import { Component, OnInit } from "@angular/core";
import { AngularEditorConfig } from "@kolkov/angular-editor";
import { AuthorDetails } from "./author-details.model";
import { Observable } from "rxjs";
import { AppState } from "../app.state";
import { Store } from "@ngrx/store";
import { AuthorBioActions } from "./author-bio.actions";
import { UpdateTopicService } from "../common/services/update-topic.service";

@Component({
  selector: "app-author-bio",
  templateUrl: "./author-bio.component.html",
  styleUrls: ["./author-bio.component.css"]
})
export class AuthorBioComponent implements OnInit {
  editorData = "Editor data";
  technology = "angular";
  articleHeading = '';
  authorName = '';
  articleId = '';
  authorData: Observable<AuthorDetails>;

  constructor(private store: Store<AppState>, private service: UpdateTopicService) {}

  config: AngularEditorConfig = {
    editable: true,
    spellcheck: true,
    height: "40rem",
    minHeight: "5rem",
    placeholder: "Enter text here...",
    translate: "no",
    customClasses: [
      {
        name: "quote",
        class: "quote"
      },
      {
        name: "redText",
        class: "redText"
      },
      {
        name: "titleText",
        class: "titleText",
        tag: "h1"
      }
    ]
  };

  ngOnInit() {
    this.authorData = this.store.select("authorDetails");
    this.authorData.subscribe(data => {
      console.log(data);
      this.editorData = data.editorData;
    });
  }

  onSubmit() {
    this.service.update(this.articleHeading, this.editorData, this.technology, this.authorName, this.articleId);
    this.store.dispatch(new AuthorBioActions({
      editorData: this.editorData
    }));
    console.log(this.editorData);
  }
}
