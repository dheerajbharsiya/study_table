import { Component, OnInit } from "@angular/core";
import { AppState } from "../app.state";
import { Store } from "../../../node_modules/@ngrx/store";
import { UpdateTopicService } from "../common/services/update-topic.service";
import { CommunicatorService } from "../common/services/communicator.service";
import { Router } from "../../../node_modules/@angular/router";

@Component({
  selector: "app-javascript-blogs",
  templateUrl: "./javascript-blogs.component.html",
  styleUrls: ["./javascript-blogs.component.css"]
})
export class JavascriptBlogsComponent implements OnInit {
  editorData: any;
  constructor(private store: Store<AppState>, private udpateService: UpdateTopicService,
    private commnunicatorService: CommunicatorService, private router: Router) { }
  topics: any[];
  ngOnInit() {
    let storeData = this.store.select("authorDetails");
    storeData.subscribe(data => {
      if (data) {
        this.editorData = data.editorData;
      }
    });
    this.udpateService.getTopics().subscribe((data) => {
      this.topics = data;
      console.log(data);
    });

  }

  wholeArticle(editorData) {
    this.commnunicatorService.setArticleDetails(editorData);
    this.router.navigateByUrl('/blogs');
  }

}
