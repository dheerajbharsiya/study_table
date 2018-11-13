import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { routingModule } from './app.routing';
import { MainContainerComponent } from './main-container/main-container.component';
import { LeftNavigationComponent } from './left-navigation/left-navigation.component';
import { AuthorBioComponent } from './author-bio/author-bio.component';
import { BlogsComponent } from './blogs/blogs.component';
import { AngularEditorModule } from '@kolkov/angular-editor';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { StoreModule } from '@ngrx/store';
import { reducer } from './author-bio/author-bio.reducer';
import { JavascriptBlogsComponent } from './javascript-blogs/javascript-blogs.component';
import { HomepageComponent } from './homepage/homepage.component';
import { UpdateTopicService } from './common/services/update-topic.service';
import { CommunicatorService } from './common/services/communicator.service';

@NgModule({
  declarations: [
    AppComponent,
    MainContainerComponent,
    LeftNavigationComponent,
    AuthorBioComponent,
    BlogsComponent,
    JavascriptBlogsComponent,
    HomepageComponent
  ],
  imports: [
    BrowserModule,
    routingModule,
    AngularEditorModule,
    FormsModule,
    HttpClientModule,
    StoreModule.forRoot({
      authorDetails: reducer
    })
  ],
  providers: [UpdateTopicService, CommunicatorService],
  bootstrap: [AppComponent]
})
export class AppModule { }
