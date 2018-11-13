import { Component, OnInit } from '@angular/core';
import { CommunicatorService } from '../common/services/communicator.service';

@Component({
  selector: 'app-blogs',
  templateUrl: './blogs.component.html',
  styleUrls: ['./blogs.component.css']
})
export class BlogsComponent implements OnInit {

  constructor(private communicatorService: CommunicatorService) { }
  editorData : string;
  ngOnInit() {
    let data = this.communicatorService.getArticleDetails().subscribe((data) => {
      this.editorData = '<p>The <em>post body</em>.</p>';
    });
  }

}
