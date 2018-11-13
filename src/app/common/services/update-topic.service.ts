import { Injectable } from '@angular/core';
import { HttpClient } from '../../../../node_modules/@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class UpdateTopicService {

  constructor(private http: HttpClient) { }
  update(articleHeading: string, editorData: string, technology: string, authorName: string, articleId: string): boolean {
    if (editorData && editorData !== '' && technology !== null) {
      this.http.post('http://localhost:3000/hello', {
        articleHeading: articleHeading,
        editorData: editorData,
        technology: technology,
        authorName: authorName,
        articleId : articleId
      }).subscribe((data) => {
        console.log(data);
      });
    } else {
      console.log('null pointer');
    }
    return true;
  }

  getTopics(): any {
    return this.http.get('http://localhost:3000/getTopics');
  }
}
